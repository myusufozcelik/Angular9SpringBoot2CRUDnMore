import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Country } from 'src/app/country';
import { User } from 'src/app/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add-reactive',
  templateUrl: './user-add-reactive.component.html',
  styleUrls: ['./user-add-reactive.component.css']
})
export class UserAddReactiveComponent implements OnInit {


  constructor(private alertifyService:AlertifyService,
    private countryService:CountryService,
    private userService:UserService,
    private formBuilder:FormBuilder) { }

      userAddForm:FormGroup
      user: User = new User();
      countries:Country[]
      genders = [
       {name:'Male'},
        {name:'Female'},
         {name:'Prefer not to disclose'} ] 

  ngOnInit(): void {
    this.getAllCountries()
    this.createUserAddForm()
  }

  createUserAddForm() {
    this.userAddForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      gender:['',Validators.required],
      country:['',Validators.required]
    });
  }

  add() {
      if(this.userAddForm.valid) {
        this.user = Object.assign({},this.userAddForm.value)
      }
      this.userService.createUser(this.user).subscribe(data=>{
        this.alertifyService.success("Successfuly added")
      })
  }

  getAllCountries() {
    this.countryService.getCountries().subscribe(data=>{
      //console.log(data)
      this.countries = data
      console.log(JSON.stringify(this.countries))
    },
    error=>console.log(error)) 
  }


}
