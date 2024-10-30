import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrganisationService} from "../../../services/organisation.service";
import {Organisation} from "../../../models/organisation.model";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-edit-organisation',
  templateUrl: './edit-organisation.component.html',
  styleUrls: ['./edit-organisation.component.scss']
})
export class EditOrganisationComponent implements OnInit {

  contactEmail: string
  phoneNumber: string
  accountCode: string
  organisationName: string
  stakeholderType: string = 'Choose stakeholder type'
  physicalAddress: string
  organisationKey: string
  industry: string
  isActive: boolean
  orgId: number

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private orgService: OrganisationService,
              private router: Router,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.orgId = params['id']
      this.orgService.getOrganisationById(params['id']).subscribe(org => {
        this.contactEmail = org.contactEmail;
        this.phoneNumber = org.phoneNumber;
        this.organisationName = org.organisationName;
        this.stakeholderType = org.stakeholderType;
        this.physicalAddress = org.physicalAddress;
        this.industry = org.industry;
        this.isActive = true;
        this.organisationKey = org.organisationKey;
        this.accountCode = org.accountCode;
      })
    });
  }


  saveOrganisation() {
    let newOrgData: Organisation = {
      id: this.orgId,
      organisationName: this.organisationName,
      phoneNumber: this.phoneNumber,
      contactEmail: this.contactEmail,
      isActive: this.isActive,
      industry: this.industry,
      physicalAddress: this.physicalAddress,
      stakeholderType: this.stakeholderType,
      organisationKey: this.organisationKey,
      accountCode: this.accountCode
    }
    console.log(newOrgData.isActive)

    this.orgService
      .editOrganisation(this.orgId, newOrgData)
      .subscribe(resp => {
      this.toastrService.info("Information Updated");
      this.router.navigate(["/base/manage-orgs"]);
    });
  }
}
