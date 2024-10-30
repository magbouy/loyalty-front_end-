import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CreateRequestComponent} from './createRequest.component';
//import { PreviousComponent } from './previous/previous.component';
//import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Requests',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'colors',
      },
      {
        path: 'colors',
         //component: NewComponent,
        //component: CreateRequestComponent,
        data: {
          title: 'Create New',
        },
      },
      {
        path: 'typography',
        //component: PreviousComponent,
        data: {
          title: 'Previous Requests',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsRoutingModule {}
