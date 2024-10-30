import {Component, OnInit} from '@angular/core';
import {OrganisationService} from "../../../services/organisation.service";
import {Organisation} from "../../../models/organisation.model";


@Component({
  selector: 'app-manage-orgs',
  templateUrl: './manage-orgs.component.html',
  styleUrls: ['./manage-orgs.component.scss'],
})
export class ManageOrgsComponent implements OnInit{
  organisations!: Organisation[];
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15];
  public message: any;
  private responderOrganisation: "ZOL";
  private authorCode: any;
  decision: string;


  constructor(private orgService: OrganisationService) {
  }

  getOrganisations() {
    this.orgService.getOrganisations().subscribe(content => {
      this.organisations = content;
    })
  }

  submitForm() {

  }
  open(content) {
    console.log(content)
  }

  onTable
  selectedItem: any;

  onTableDataChange($event: number) {

  }

  ngOnInit(): void {
    this.getOrganisations()
  }
}
