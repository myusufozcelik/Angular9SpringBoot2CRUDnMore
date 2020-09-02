import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from 'src/app/services/alertify.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration } from 'src/app/registration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userName:string;
  password:string;

  constructor(
    private alertifyService:AlertifyService,
    private formBuilder:FormBuilder,
    private router:Router,
    private registrationService:RegistrationService
    ) { 
      let isLoggedIn = this.registrationService.isLoggedIn()?this.router.navigate(["/users"]):this.router.navigate(["/login"])
    }



  loginForm:FormGroup
  loginModel:Registration = new Registration();
  

  ngOnInit(): void {
    this.createLoginForm()
  }



  createLoginForm() {
      this.loginForm = this.formBuilder.group({
        userName:['',Validators.required],
        password:['',Validators.required]
      })
  }


  

   login(form:FormGroup) {
     this.registrationService.login(this.loginForm.value)
     this.router.navigate(['/users'])
     console.log(this.loginForm.value);  
     console.log(this.registrationService.isLoggedIn())
   }

}
