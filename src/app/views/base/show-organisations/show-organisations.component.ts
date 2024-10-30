import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrganisationService} from "../../../services/organisation.service";
import {Organisation} from "../../../models/organisation.model";

@Component({
  selector: 'app-show-organisations',
  templateUrl: './show-organisations.component.html',
  styleUrls: ['./show-organisations.component.scss']
})
export class ShowOrganisationsComponent implements OnInit{

  organisationList: Organisation[] = [];

  constructor(private http: HttpClient, private orgService: OrganisationService) {
  }



  getAllOrganisations() {
    this.orgService.getOrganisations().subscribe(orgs => {
      this.organisationList = orgs;
    })
  }

  ngOnInit(): void {
    this.getAllOrganisations()
  }
}
