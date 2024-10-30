import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ModalModule } from '@coreui/angular';

import {PagesRoutingModule} from './pages-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
//import { Page404Component } from './page404/page404.component';
//import { Page500Component } from './page500/page500.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule, CardModule, FormModule, GridModule, HeaderDividerComponent} from '@coreui/angular';
import {IconModule} from '@coreui/icons-angular';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {ShowOrganisationsComponent} from '../base/show-organisations/show-organisations.component';
import {SignupComponent} from './signup/signup.component';
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    ShowOrganisationsComponent,
    SignupComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    HeaderDividerComponent,
   MatStepperModule
  ]
})
export class PagesModule {
}
