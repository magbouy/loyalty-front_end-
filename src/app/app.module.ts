import { JwtInterceptor } from './jwt.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';
import { AuthService } from './services/auth.service';
//import { NgxPaginationModule } from 'ngx-pagination';


import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
//import { NewComponent } from './views/requests/new/new.component';
import { PreviousComponent } from './views/requests/previous/previous.component';
import { NewComponent } from './views/requests/new/new.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {authGuard} from "./guards/auth.guard";
import { SearchPipe } from './views/base/search.pipe';


const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  declarations: [AppComponent,
    ...APP_CONTAINERS,
    NewComponent,
    //SearchPipe,

   // PreviousComponent
   ],


  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    FormModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormsModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbAlertModule,
    NgbTooltipModule,
    MatSortModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    NgbToastModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,},
    IconSetService,
    Title,

  ],
  bootstrap: [AppComponent]


})
export class AppModule {
}
