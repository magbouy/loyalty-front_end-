import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ShowOrganisationsComponent} from "../base/show-organisations/show-organisations.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Sign Up'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
