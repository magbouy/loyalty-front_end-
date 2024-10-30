import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResponsesService} from "../../../services/responses.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {log10} from "chart.js/types/helpers";
import {OrganisationService} from "../../../services/organisation.service";

@Component({
  selector: 'app-show-response',
  templateUrl: './show-response.component.html',
  styleUrls: ['./show-response.component.scss']
})
export class ShowResponseComponent implements OnInit{

  responses: any[] = [];
  contactInfo: any;
  proceedCount = 0
  request!: any
  waitCount: any[];
  constructor(private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private organisationService: OrganisationService,
              private responseService: ResponsesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.responseService.getResponse(id).subscribe(results => {
        this.responses = results.responses;
        this.request = results.request;
        // console.log(results.responses)
        // console.log(results.request)
      })
    });
    this.waitCount = this.getWaitCount()
  }

  getWaitCount () {
    return this.responses.filter(response => response.id >= 1000)
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      result => console.log('---Opened---')
    );
  }

  fetchOrganisation(organisationName: any) {
    this.organisationService.getOrganisationByName(organisationName).subscribe(organisation => {
      this.contactInfo = organisation;
      // console.log(organisation)
    })
  }
}
