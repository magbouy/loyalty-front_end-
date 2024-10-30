import { NgModule } from '@angular/core';
import {RegisterService} from './../../../services/register.service';
import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr'
import {Router} from '@angular/router';
import {isJsxSelfClosingElement} from 'typescript/lib/tsserverlibrary';
import {Subject, debounceTime} from 'rxjs';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {OrganisationService} from "../../../services/organisation.service";


@Component({
  selector: 'app-add-organisation',
  templateUrl: './add-organisation.component.html',
  styleUrls: ['./add-organisation.component.scss']
})
export class AddOrganisationComponent {


constructor(
  private http: HttpClient,
  private registerService: RegisterService,
  private toastr: ToastrService,
  private formBuilder: FormBuilder,
  private router: Router,
  private orgService: OrganisationService) {
}

contactEmail: string
phoneNumber: string
accountCode: string
organisationName: string
stakeholderType: string = 'Choose stakeholder type'
physicalAddress: string
organisationKey: string
industry: string
isActive: boolean


ngOnInit(): void {
}

submitForm() {
  let payload = {
    'contactEmail': this.contactEmail,
    'phoneNumber': this.phoneNumber,
    'organisationName': this.organisationName,
    'stakeholderType': this.stakeholderType,
    'physicalAddress': this.physicalAddress,
    'industry': this.industry,
    'isActive': false
  }
  console.log(payload)

  this.orgService.addOrganisation(payload).subscribe(next => {
    this.toastr.success("Registration initiated.");
    this.router.navigate(["login"]).then(r => {console.log(r)});
  })


}
}

