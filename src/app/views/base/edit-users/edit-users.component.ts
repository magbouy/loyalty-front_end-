import {Response} from './../../../models/response';
import {UserService} from './../../../services/user.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrganisationService} from "../../../services/organisation.service";
import {Organisation} from "../../../models/organisation.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  contactEmail: string
  accountCode: string
  organisationName: string
  role: string = 'Select Role'
  organisationKey: string
  isActive: boolean = true
  userId: number
  userRef: string
  password: string
  toastr: any;

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private orgService: OrganisationService,
              private router: Router,
              private toastrService: ToastrService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id']
      this.userService.getUserById(this.userId).subscribe(platformUser => {
        console.log(platformUser);
        this.organisationName = platformUser.organisation
        this.contactEmail = platformUser.email
        this.password = ""
        this.userRef = platformUser.userIdentityRef
      })

    });
  }


  saveUsers() {

    let newUserData = {
      organisation: this.organisationName,
      email: this.contactEmail,
      isActive: this.isActive,
      role: this.role,
      accountCode: this.accountCode,
      userIdentityRef: this.userRef,
      id: this.userId,
      password: this.password,
      createdByAdmin: localStorage.getItem('userReference')
    }
    console.log(newUserData);
    this.userService.editUsers(this.userId, newUserData).subscribe(
      (resp: any) => { // Use 'any' as the type assertion to allow any response type
        //console.log(resp);

        if (resp == null) {
          // console.log("response from call", resp);
          this.router.navigate(['/base/manage-users']);
        } else {

          // console.log("response from call", resp);
          this.toastr.warning('something went wrong', 'Warning');
        }
      },
      error => {
        //console.log("response from call", error);
        this.toastr.error('failed to update', 'failed');
      }
    );
  }


}
