import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../services/user.service";
import {OrganisationService} from "../../services/organisation.service";
import {Organisation} from "../../models/organisation.model";
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {CarouselCaptionComponent,CarouselComponent,CarouselControlComponent, 
  CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent} from '@coreui/angular';
  // ,ThemeDirective

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  organisations: Organisation[];
  cards: any[];

  constructor(private chartsData: DashboardChartsData,
              private toastr: ToastrService,
              private userService: UserService,
              private orgService: OrganisationService) {
  }

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
    this.toastr.info("Check your inbox for new requests");
    // this.orgService.getOrganisations().subscribe(orgs => {
    //   this.organisations = orgs.reverse()
    // })


    // this.slides[0] = {
    //   id: 0,
    //   src: './assets/img/Untitled.jpeg',
    //   title: 'First slide',
    //   subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    // };
    this.slides[0] = {
      id: 0,
      src: './assets/images/Customer Loyalty Analysis.png',
      title: 'Hurry up and redeem goods using earned points',
      subtitle: 'Hurry up and redeem goods using earned points'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/images/star.jpeg',
      title: '5 Star Customer Services',
      subtitle: '5 Star Customer Services Guaranteed.'
    };



    this.slidess[0] = {
      id: 0,
      src: './assets/images/kindpng_2413641.png',
      title: '',
      subtitle: ''
    };
    this.slidess[1] = {
      id: 1,
      src: './assets/images/groc111.png',
      title: '',
      subtitle: ''
    };
    this.slidess[2] = {
      id: 2,
      src: './assets/images/kindpng_5532507.png',
      title: '',
      subtitle: ''
    };
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  slides: any[] = new Array(2).fill({ id: -1, src: '', title: '', subtitle: '' });
  slidess: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });


  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
