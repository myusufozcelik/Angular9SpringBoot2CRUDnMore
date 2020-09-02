import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import { RegistrationService } from 'src/app/services/registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Country } from 'src/app/country';
import { CountryService } from 'src/app/services/country.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id:number;
  user:User;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private alertifyService:AlertifyService,
    private countryService:CountryService,
    private registrationService:RegistrationService,
    private userService:UserService,
    private formBuilder:FormBuilder) {
     
     }

     detailsForm:FormGroup
     _user : User = new User();
     countries:Country[]
     genders = [
      {name:'Male'},
       {name:'Female'},
        {name:'Prefer not to disclose'} ] 

  ngOnInit(): void {
    this.getUser()
    this.isLoggedIn()
    this.getAllCountries()
    this.createDetailsForm()
    console.log(this.user.firstName + this.user.lastName)
  }

  isLoggedIn() {
    return this.registrationService.isLoggedIn()
  }

  disabledForm() {
    if(this.isLoggedIn()==false) {
      this.detailsForm.disabled
    }
  }

  createDetailsForm() {
     
      this.detailsForm = this.formBuilder.group({
        firstName:[,Validators.required],
        lastName:['',Validators.required],
        gender:['',Validators.required],
        country:['',Validators.required]
      })
  }

  save(id:number) {
      if(this.detailsForm.valid) {
        this._user = Object.assign({},this.detailsForm.value)
      }
      this.userService.updateUser(id,this._user).subscribe(data=>{
        this.alertifyService.success(this._user.firstName+' '+this._user.lastName + " process is successful")
      },
      error=>console.log(error))
      this.backToTheUsersList()
  }

  getAllCountries() {
    this.countryService.getCountries().subscribe(data=>{
      this.countries = data
      //  console.log(JSON.stringify(this.countries))
    },
    error=>console.log(error)) 
  }
  

  getUser() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(data=>{
      this.user = data
      this.detailsForm.patchValue({
        firstName:this.user.firstName,
        lastName:this.user.lastName,
        gender:this.user.gender,
        country:this.user.country
      })
    },
    error=>console.log(error))
  }

  backToTheUsersList() {
    this.router.navigate(['users'])
  }

}
