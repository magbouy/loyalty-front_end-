import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterService} from "../../../services/register.service";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {OrganisationService} from "../../../services/organisation.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  firstFormGroup: FormGroup = this.formBuilder.group({
    // contactEmail: ["", {validators: [Validators.required, Validators.email]}],
    // phoneNumbe: ["", {validators: [Validators.required]}],
    // organisationName: ["", {validators: [Validators.required]}],
    // stakeholderType: ["Choose a category", {validators: [Validators.required]}],
    // physicalAddress: ["", {validators: [Validators.required]}],
    // industry: ["", {validators: [Validators.required]}],
    // isActive: [false],

    firstname: ["", {validators: [Validators.required, Validators.email]}],
    phonenumber: ["", {validators: [Validators.required]}],
    lastname: ["", {validators: [Validators.required]}],
    email: ["", {validators: [Validators.required]}],
    password: ["", {validators: [Validators.required]}],
    role: ["", {validators: [Validators.required]}],
  });

  secondFormGroup: FormGroup = this.formBuilder.group({
    email: ["", {validators: [Validators.required, Validators.email]}],
    password: ["", {validators: [Validators.required]}],
  });

 

  constructor(
    private http: HttpClient,
    private registerService: RegisterService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
    private orgService: OrganisationService) {
  }


  handleSignup() {
    let submitBody = {
      'firstname': this.firstFormGroup.get('firstname')?.value,
      'phonenumber': this.firstFormGroup.get('phonenumber')?.value,
      'lastname': this.firstFormGroup.get('lastname')?.value,
      'email': this.firstFormGroup.get('email')?.value,
      'password': this.firstFormGroup.get('password')?.value,
      'role': "USER",
      // 'createdOn': new Date(),
      'username':this.firstFormGroup.get('email')?.value,
    };
    let userPayload = {
      'username': this.secondFormGroup.get('email')?.value,
      'email': this.secondFormGroup.get('email')?.value,
      'password': this.secondFormGroup.get('password')?.value,
      'organisationName': this.firstFormGroup.get('organisationName')?.value,
      'role': "ADMIN",
      'isActive': true,
      'createdByAdmin': "registrant"
    };
    // console.log('User payload:' + userPayload)
    // this.orgService.addOrganisation(orgPayload).subscribe(res => {
    //   console.info(`organisation ${orgPayload} registration successful`)
    // });

    // this.registerService.registerUser(submitBody).subscribe((resp: any) => {
    //   console.log(submitBody)
    //   console.log(resp);
    //   if (resp= true){
    //     console.log("success x2");
    //     this.toastr.success( 'Success!');
    //     this.router.navigate(["/pages/login"]).then();
    //   // window.location.reload()
    //   }
      

      
    // })

    // this.registerService.registerUser(submitBody).subscribe(
    //   (resp: any) => {
    //     console.log(submitBody);
    //     console.log(resp);
        
    //     if (resp === true) {
    //       console.log("success x2");
    //       this.toastr.success('Success!');
    //       this.router.navigate(["/pages/login"]).then();
    //     }
    //   },

    // )

    this.registerService.registerUser(submitBody).subscribe(
      (resp: any) => {
        console.log(submitBody);
        console.log(resp);
    
        // Adjust the condition based on your API response structure
        if (resp === true || resp.success === true || resp.status === "success") {
          console.log(submitBody);
          console.log("success x2");
          // this.toastr.success('Registration successful!');
          // this.router.navigate(["/pages/login"]).then();
        } else {
          // Handle any other cases where the registration failed
          // this.toastr.error('Registration failed!');
          this.toastr.success('Registration successful!');
          console.log(submitBody);
          this.router.navigate(["/login"]).then();
        }
      },
      (error: any) => {
        // Handle error from the API
        console.error('Error occurred:', error);
        this.toastr.error('An error occurred during registration!');
      }
    );

  
  }}


    
      
