import {createComponent, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AccordionsComponent} from './accordion/accordions.component';
import {MyRequestsComponent} from './my-requests/my-requests.component';
import {InboxComponent} from './inbox/inbox.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {AnnonymousReportsComponent} from './annonymous-reports/annonymous-reports.component';
import {EveryRequestsComponent} from './every-requests/every-requests.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddUserComponent} from './add-user/add-user.component';
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {ManageOrgsComponent} from "./manage-orgs/manage-orgs.component";
import {AddOrganisationComponent} from './add-organisation/add-organisation.component';
import {ShowOrganisationsComponent} from "./show-organisations/show-organisations.component";
import {ShowResponseComponent} from "./show-response/show-response.component";
import {EditOrganisationComponent} from "./edit-organisation/edit-organisation.component";
import {adminGuard, authGuard, superGuard} from "../../guards/auth.guard";
import {ResponsesComponent} from "./responses/responses.component";
import { EditUsersComponent } from './edit-users/edit-users.component';
import {MakeRequestComponent} from "./make-request/make-request.component";
import {CreateRequestComponent} from "../charts/create-request/create-request.component";
const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'every-requests',
        component: EveryRequestsComponent,
        data: {
          title: 'My Info'
        },
      },
      {
        path: 'my-requests',
        component: MyRequestsComponent,
        data: {
          title: 'My Requests',
        },
      },
      {
        path: 'make-request',
        component: MakeRequestComponent,
        data: {
          title: 'Redeem  Rewards',
        },
      },
      {
        path: 'inbox',
        component: InboxComponent,
        data: {
          title: 'Inbox',
        },
      },
      {
        path: 'update-profile',
        component: UpdateProfileComponent,
        data: {
          title: 'update profile',
        },
        canActivate: [authGuard]
      },
      {
        path: 'anonymous-reports',
        component: AnnonymousReportsComponent,
        data: {
          title: 'Anonymous Reports',
        },
      },
      {
        path: 'add-user',
        component: AddUserComponent,
        data: {
          title: 'Add User',
        },
        canActivate: [authGuard]
      },
      {
        path: 'manage-users',
        component: ManageUsersComponent,
        data: {
          title: 'Manage Users',
        },
        canActivate: [authGuard]
      },
      {
        path: 'manage-orgs',
        component: ManageOrgsComponent,
        data: {
          title: 'Manage Organisations',
        },
        canActivate: [superGuard, authGuard]
      },
      {
        path: 'edit-users/:id',
        component: EditUsersComponent,
        data: {
          title: 'Edit Users',
        },
        canActivate: [authGuard]
      },


      {
        path: 'edit-organisation/:id',
        component: EditOrganisationComponent,
        data: {
          title: 'Edit Organisation',
        },
        canActivate: [superGuard]
      },
      {
        path: 'view-responses',
        component: ResponsesComponent,
        data: {
          title: 'View Response',
        },

      },
      {
        path: 'partner-contacts',
        component: ShowOrganisationsComponent,
        data: {
          title: 'Partner Contacts'
        }

      },
      {
        path: 'add-organisation',
        component: AddOrganisationComponent,
        data: {
          title: 'Add Organisations',
        },
        canActivate: [authGuard]
      },
      {
        path: 'show-response/:id',
        component: ShowResponseComponent,
        data: {
          title: 'Response Details',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, NgbModule],
})
export class BaseRoutingModule {
}

