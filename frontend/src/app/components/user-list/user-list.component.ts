import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService,
    private alertifyService:AlertifyService,
    private registrationService:RegistrationService,
    private router:Router) { }
    users:User[]
    gender = ''
    filterText = ''
  ngOnInit(): void {
    this.getAllUser()
    console.log(this.getAllUser())
  }

  isLoggedIn() {
     return this.registrationService.isLoggedIn();
  }

  getAllUser() {
      this.userService.getAllUsers().subscribe(data=>{
        
        this.users = data
      })
  }

  deleteUser(id:number) {
    this.userService.deleteUser(id).subscribe(data=>{
      this.getAllUser();
    },
    
    error=>console.log(error))
  }

  userDetail(event:any, id:number) { 
    if(event!=null && event.target.nodeName=='SPAN'){
      event.preventDefault();
      return;
    }

    this.router.navigate(['details',id])
  }



}
