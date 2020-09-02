import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { User } from '../user';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private baseUrl = 'http://localhost:8080/api'
  constructor(private httpClient:HttpClient,
    private alertifyService:AlertifyService) { }
 
      
  getAllUsers():Observable<User[]>{ 
      return this.httpClient.get<User[]>(this.baseUrl+'/users')
  } 

  getUser(id:number):Observable<User> {
      return this.httpClient.get<User>(this.baseUrl+'/user/'+id)
  }
  
  createUser(user:Object):Observable<Object> {
    return this.httpClient.post<User>(this.baseUrl+'/users',user)
  }

  updateUser(id:number,user:User):Observable<User> {
    return this.httpClient.put<User>(this.baseUrl+'/user/'+id,user)
  }

  deleteUser(id:number):Observable<any> {
    this.alertifyService.success("Deletion Successful")
      return this.httpClient.delete(this.baseUrl+'/user/'+id,{responseType:'text'})
  }

  deleteAll():Observable<any> {
   var r = confirm("Are you sure?")

   if(r) {
     this.alertifyService.warning("All data is deleted...")

   }
   else {
     alert("Transaction Canceled")
   }
    

    return this.httpClient.delete(this.baseUrl+'/users')
  }

}


 

