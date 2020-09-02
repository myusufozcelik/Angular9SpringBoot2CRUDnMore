import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Country } from 'src/app/country';
import { AlertifyService } from 'src/app/services/alertify.service';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-user-add-template',
  templateUrl: './user-add-template.component.html',
  styleUrls: ['./user-add-template.component.css']
})
export class UserAddTemplateComponent implements OnInit {

  constructor(private countryService:CountryService,
    private alertifyService:AlertifyService,
    private userService:UserService) { }

  countries:Country[]
  genders = [
    {name:'Male'},
    {name:'Female'},
    {name:'Prefer not to disclose'}
  ] 

  model: User = new User();
  ngOnInit(): void {
    this.getAllCountries()
    // this.model.gender="";
     
  }


  add(form:NgForm) {
      this.userService.createUser(this.model).subscribe(data=>{
        this.alertifyService.success( 'Successfully Added ' )
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
