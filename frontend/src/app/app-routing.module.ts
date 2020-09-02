import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserAddTemplateComponent } from './components/user-add-template/user-add-template.component';
import { UserAddReactiveComponent } from './components/user-add-reactive/user-add-reactive.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginGuard } from './login-guard';


const routes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UserListComponent},
  {path:'details/:id',component:UserDetailsComponent},
  {path:'add-template',component:UserAddTemplateComponent,canActivate:[LoginGuard]},
  {path:'add-reactive',component:UserAddReactiveComponent,canActivate:[LoginGuard]},
  {path:'login',component:UserLoginComponent},
  {path:"registration",component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
