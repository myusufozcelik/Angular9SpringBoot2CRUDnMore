import { Component } from '@angular/core';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private registrationService:RegistrationService) {}
  title = 'proje';

  isLoggedIn() {
    return this.registrationService.isLoggedIn()
  }

  logOut() {
    this.registrationService.logOut();
  }

}
