import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartsComponent } from './charts.component';
import { CreateRequestComponent } from './create-request/create-request.component';

const routes: Routes = [
  {
    path: '',
    component: CreateRequestComponent,
    data: {
      title: 'Requests',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}

