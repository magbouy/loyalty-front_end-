
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';


import { RegisterService } from './../../../services/register.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import emailjs, { send } from 'emailjs-com';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  constructor(
    private http: HttpClient,
    private registerService: RegisterService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  customerusername: string
  adminusername: string

  phonenumber: string
  receiptcode: string
  organisationName: string
  stakeholderType: string = 'Choose stakeholder type'
  physicalAddress: string
  organisationKey: string
  industry: string
  isActive: boolean
  operatorId:any
  username: any
  points: number
  amount:number
  rate = 10
  points_awarded

  ngOnInit(): void {
    // Initialize EmailJS with your user ID
    emailjs.init("23YZBgmnkBOOKXAFz");
  }

  async sendEmail() {
    const points = this.amount / this.rate;
    const templateParams = {
      to_name: this.username,
      points_awarded: points,
      operatorId: this.operatorId,
      reply_to: "no reply"
    };

    try {
      const response = await emailjs.send("service_i8ha2tq", "template_cppt9fq", templateParams);
      console.log('Email sent successfully!', response);
      this.toastr.success("Email sent successfully!");
    } catch (error) {
      console.log(send)
      console.error('Failed to send email.', error);
      this.toastr.error("Failed to send email.");
    }
  }

   submitForm()
    {
      const points = this.amount / this.rate;
     let submitBody = {
      operatorId: this.operatorId,
      username: this.username,
      points: points,
      points_awarded: this.points
     };

     console.log(submitBody);

    
this.registerService.awardPoints(this.operatorId, this.username, points).subscribe({
  next: (response) => {
    console.log("Full response:", response); // Log the full response object
    this.toastr.success("Points awarded successfully");

  },
  error: (error) => {
    console.log("Error response:", error); // Log the error object

    // Check for specific error status codes
    if (error.status === 500) {
      this.toastr.error("Server Error. User  not found");
      this.router.navigate(["/login"]).then(() => {
        window.location.reload();
      });
    } else if (error.status === 403) {
      this.toastr.error("Forbidden: You don't have permission to perform this action.");
      this.router.navigate(["/login"]).then(() => {
        window.location.reload();
      });
    } else {
      this.toastr.success("Points awarded successfully");
     this.sendEmail(); 
   
    }

  }
});
    }}