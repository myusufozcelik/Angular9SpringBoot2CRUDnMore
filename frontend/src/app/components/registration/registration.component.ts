import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { Registration } from 'src/app/registration';
import { Country } from 'src/app/country';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private countryService:CountryService,
    private alertifyService:AlertifyService,
    private registrationService:RegistrationService) { }

    registrationForm:FormGroup
    registration:Registration = new Registration();
    countries:Country[];
 
  ngOnInit(): void {
    this.createRegistrationForm()
    this.getAllCountries()
  }

  createRegistrationForm() {
      this.registrationForm = this.formBuilder.group({
        userName:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
        confirmPassword:['',Validators.required],
        firstName:['',Validators.required], 
        lastName:['',Validators.required],
        country:['',Validators.required],
        age:['',[Validators.required,Validators.minLength(0)]]
      },
       {
         validator:this.passwordMatchValidator
       }
      )
  }
   
    passwordMatchValidator(p:FormGroup) {
      return p.get('password').value === p.get('confirmPassword').value?null: {
        mismatch:true
      }
    }



  add() {
    if(this.registrationForm.valid) {
      this.registration = Object.assign({},this.registrationForm.value)
    }
    this.registrationService.createRecord(this.registration).subscribe(data=> {
      
      this.alertifyService.success("Registration successfull!")
    },error=>console.log(error))
}


 getAllCountries() {
  this.countryService.getCountries().subscribe(data=>{
    this.countries = data
    //  console.log(JSON.stringify(this.countries))
  },
  error=>console.log(error)) 
}

passwordCheck(p:FormGroup) {
  return p.get('password').value === p.get('confirmPassword').value?null:{mismatch:true}
}

  }



