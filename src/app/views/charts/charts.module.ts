import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {  DatePipe } from '@angular/common';
import { CreateRequestComponent } from './create-request/create-request.component';


@NgModule({
  declarations: [ChartsComponent, CreateRequestComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    DocsComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule
  ],
  providers: [
    DatePipe]
})
export class ChartsModule {
}
