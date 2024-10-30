//import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import {CanActivateFn, RouterModule, Routes} from '@angular/router';

import { NewComponent } from './views/requests/new/new.component';
import { DefaultLayoutComponent } from './containers';
//import { Page404Component } from './views/pages/page404/page404.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { EditProfileComponent } from './views/pages/edit-profile/edit-profile.component';
import {ShowResponseComponent} from "./views/base/show-response/show-response.component";
import {authGuard} from "./guards/auth.guard";
import {SignupComponent} from "./views/pages/signup/signup.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
  path:'requests',
  component: NewComponent,
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
     {
      path: 'requests',
      //canActivate:[AuthGuard]
      loadChildren: () =>

        import('./views/requests/requests.module').then((m) => m.RequestsModule)
    },
    //inbox=base
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'requests',
        loadChildren: () =>
          import('./views/requests/requests.module').then((m) => m.RequestsModule)
      },

      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
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
      title: 'Sign Up Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register'
    }
  },


  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
