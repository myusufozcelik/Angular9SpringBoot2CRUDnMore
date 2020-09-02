import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSearchPipe } from './user-search.pipe';
import { UserAddReactiveComponent } from './components/user-add-reactive/user-add-reactive.component';
import { UserAddTemplateComponent } from './components/user-add-template/user-add-template.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserFilterPipe } from './user-filter.pipe';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginGuard } from './login-guard';
import { ForgotLoginComponent } from './components/forgot-login/forgot-login.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    UserSearchPipe,
    UserAddReactiveComponent,
    UserAddTemplateComponent,
    UserLoginComponent,
    UserFilterPipe,
    RegistrationComponent,
    ForgotLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
