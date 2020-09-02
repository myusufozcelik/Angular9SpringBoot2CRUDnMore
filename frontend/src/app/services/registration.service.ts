import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../registration';
import { AlertifyService } from './alertify.service';
import { RouterLink, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

 private path ='http://localhost:8080/api/registration'
 
  constructor(private httpClient:HttpClient, private alertifyService:AlertifyService,
    private router:Router) {
   }


   loggedIn = false;
    reg : Registration[]
    regUserName : Registration[]
    regPassword : Registration[]
   
  //  login(registration:Registration) {
       
  //   let headers = new HttpHeaders();
  //   headers = headers.append("Content-Type","application/json")
  //   this.getAllRecords().subscribe(data=>{
  //    this.reg.userName = data['userName']
  //    this.reg.password = data['password']
     
  //   })
  //     if(registration.userName == this.reg.userName && registration.password == this.reg.password)
  //     {
  //      this.loggedIn = true
  //      localStorage.setItem("isLogged",JSON.stringify(true));
  //      this.alertifyService.success(registration.firstName + " Logged in")
  //      return true;
  //    }
  //    else {
  //      this.alertifyService.error("Username or  password is incorrect. Please try again")
  //      return false
  //    }
     
  // }

  login(registration:Registration) {
      let headers = new HttpHeaders();
      headers = headers.append("Content-Type","application/json")
      this.getAllRecords().subscribe(data=>{
        this.reg = data
        console.log(this.reg)
        for(let i=0;i<this.reg.length;i++) {
          let userName = this.reg[i].userName
          let password = this.reg[i].password
          if(registration.userName == userName && registration.password == password) {
          console.log(registration.userName + this.reg[i].userName)
          this.loggedIn = true
        }
      }
        if(this.loggedIn) {
          localStorage.setItem("isLogged",JSON.stringify(true));
          this.alertifyService.success(" Logged in")
          return true;          
        }
        else {
       this.alertifyService.error("Username or password is  incorrect. Please try again") 
        }
      })
  }
  
  //  login2(registration:Registration) { 
     
  //    let headers = new HttpHeaders();
  //    headers = headers.append("Content-Type","application/json")
  //     if(registration.userName=="myusuf" && registration.password=="123456") {
  //       this.loggedIn = true
  //       localStorage.setItem("isLogged",JSON.stringify(true));
  //       this.alertifyService.success(registration.firstName + " Logged in")
  //       return true;
  //     }
  //     else {
  //       this.alertifyService.error("Username or password is incorrect. Please try again")
  //       return false
  //     }
      
  //  }

   isLoggedIn():boolean {
      this.loggedIn= JSON.parse(localStorage.getItem('isLogged'));
      return this.loggedIn;
   }

   logOut() {
     localStorage.removeItem('isLogged')
    this.alertifyService.warning("Logged Out")
   }

//    encrypt(password:string) {
//      let keyStr: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghijklmnopqrstuvwxyz"+"0123456789"+"/"+"=";
//      password = password.split('+').join('|')
//      let input = encodeURI(password)
//      let output = ""
//      let chr1, chr2, chr3;
//      let enc1, enc2, enc3, enc4;
//      let i = 0;

//      do {
//          chr1 = input.charCodeAt(i++);
//          chr2 = input.charCodeAt(i++);
//          chr3 = input.charCodeAt(i++);

//          enc1 = chr1 >> 2;
//          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
//          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
//          enc4 = chr3 & 63;

//          if (isNaN(chr2)) {
//              enc3 = enc4 = 64;
//          } else if (isNaN(chr3)) {
//              enc4 = 64;

//          }
//          output = output +
//              keyStr.charAt(enc1) +
//              keyStr.charAt(enc2) +
//              keyStr.charAt(enc3) +
//              keyStr.charAt(enc4);
//          chr1 = chr2 = chr3 = "";
//          enc1 = enc2 = enc3 = enc4 = "";
//      } while (i < input.length);
//      //console.log("Password :" + output);
//      return output;
//  }

  getAllRecords():Observable<Registration[]> {
    return this.httpClient.get<Registration[]>(this.path)
 }

  getRecord(id:number):Observable<Registration> {
    return this.httpClient.get<Registration>(this.path+"/"+id)
  }

  createRecord(registration:Registration):Observable<Registration>{
    return this.httpClient.post<Registration>(this.path,registration);
  }

  updateRecord(id:number,registration:Registration):Observable<Registration> {
    return this.httpClient.put<Registration>(this.path+"/"+id,registration)
  }

  deleteRecord(id:number):Observable<any> {
    return this.httpClient.delete(this.path+"/"+id,{responseType:'text'})
  }


  deleteAll():Observable<any> {
    var r = confirm("Are you sure?")

    if(r) {
      this.alertifyService.warning("All users is deleted...")
 
    }
    else {
      alert("Transaction Canceled")
    } 
    
     

     return this.httpClient.delete(this.path)
  }



}
