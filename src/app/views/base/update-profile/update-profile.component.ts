import {EditProfileService} from './../../../services/edit-profile.service';
import {Component} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})

export class UpdateProfileComponent {
  constructor(
    private http: HttpClient,
    //private newService: NewService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private editProfileService: EditProfileService
  ) {
  }

  contactEmail: any;
  phoneNumber: any
  organisationName: any
  stakeholderType: any
  physicalAddress: any
  industry: any
  detailsForm!: FormGroup;

  ngOnInit() {

    this.detailsForm = this.formBuilder.group({
      contactEmail: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      organisationName: ['', Validators.required],
      stakeholderType: ['', Validators.required],
      physicalAddress: ['', Validators.required],
      industry: ['', Validators.required]
    })
  }

  submitForm(value: any) {
    let submitBody = {
      contactEmail: value.contactEmail,
      phoneNumber: value.phoneNumber,
      organisationName: value.organisationName,
      stakeholderType: value.stakeholderType,
      physicalAddress: value.physicalAddress,
      industry: value.industry,
      accountCode: this.authService.getuserId()
    }

    console.log("Submit Body: ", submitBody);
    localStorage.setItem('organisationName', value.organisationName)

    this.editProfileService.updateProfile(submitBody).subscribe(
      (resp) => {
        console.log(resp)
// @ts-ignore
        if (resp.result) {
          console.log("sucessfully posted")

        } else {
          console.log("Failed")
        }
      },
      (error: any) => {
        console.log("error")
      },
      () => {
        console.log("created")
      }
    )


  }
}
