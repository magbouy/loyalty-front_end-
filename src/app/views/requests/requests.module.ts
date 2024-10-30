import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

//import { CreateRequestComponent , ThemeColorComponent } from './createRequest.component';
import { PreviousComponent } from './previous/previous.component';
//import { NewComponent } from './new/new.component';

// Theme Routing
import { RequestsRoutingModule } from './requests-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RequestsRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    //CreateRequestComponent,
    //ThemeColorComponent,
    PreviousComponent,
   // NewComponent
  ]
})
export class RequestsModule {
}
