import {MatSortModule} from '@angular/material/sort';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


// CoreUI Modules
import {
  AccordionModule,
  ModalBodyComponent,
  ModalComponent, ModalFooterComponent,
  ModalHeaderComponent, ModalModule, ModalTitleDirective,
  TableColorDirective,
} from '@coreui/angular';
import {ButtonModule, CardModule, FormModule, GridModule, HeaderDividerComponent} from '@coreui/angular';
import {IconModule} from '@coreui/icons-angular';


// utils
import {DocsComponentsModule} from '@docs-components/docs-components.module';
import {MatTooltipModule} from "@angular/material/tooltip";


// views
import {AccordionsComponent} from './accordion/accordions.component';


// Components Routing
import {BaseRoutingModule} from './base-routing.module';
import {MyRequestsComponent} from './my-requests/my-requests.component';
import {InboxComponent} from './inbox/inbox.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {AnnonymousReportsComponent} from './annonymous-reports/annonymous-reports.component';
import {EveryRequestsComponent} from './every-requests/every-requests.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {ManageOrgsComponent} from './manage-orgs/manage-orgs.component';
import {AddOrganisationComponent} from './add-organisation/add-organisation.component';
import {ShowResponseComponent} from './show-response/show-response.component';
import {EditOrganisationComponent} from './edit-organisation/edit-organisation.component';
import {MatLegacyTooltipModule} from "@angular/material/legacy-tooltip";
import {EditUsersComponent} from './edit-users/edit-users.component';
import {ResponsesComponent} from './responses/responses.component';
import {MakeRequestComponent} from './make-request/make-request.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatCommonModule} from "@angular/material/core";
import { SearchPipe } from './search.pipe';


@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    AccordionModule,
    IconModule,
    FormsModule,
    NgxPaginationModule,
    MatSortModule,
    MatCommonModule,
    TableColorDirective,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    HeaderDividerComponent,
    MatTooltipModule,
    FormsModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalTitleDirective,
    MatStepperModule,
    ModalModule
   
    

  ],
  declarations: [
    AccordionsComponent,
    MyRequestsComponent,
    InboxComponent,
    UpdateProfileComponent,
    AnnonymousReportsComponent,
    EveryRequestsComponent,
    AddUserComponent,
    ManageUsersComponent,
    ManageOrgsComponent,
    AddOrganisationComponent,
    ShowResponseComponent,
    EditOrganisationComponent,
    ResponsesComponent,
    EditUsersComponent,
    MakeRequestComponent,
    SearchPipe
    

  ],
})
export class BaseModule {
}
