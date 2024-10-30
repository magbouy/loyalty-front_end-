import { RegisterService } from '../../../services/register.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {OrganisationService} from "../../../services/organisation.service";
import {UserService} from "../../../services/user.service";
import {RequestsService} from "../../../services/requests.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {FileManagerService} from "../../../services/file-manager.service";
import { ModalModule } from '@coreui/angular';
import emailjs, { send } from 'emailjs-com';


@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.scss']
})
export class MakeRequestComponent implements OnInit {

  username = localStorage.getItem('username');
  
  // username: string = 'magnusmatiahe@gmail.com';
    // username: string = '1233';

  id: any;
  name: string;
  pointsrequired: any;
  reward:any

  // username: string= "magnusmatiashe@gmail.com"
  // id: number =23
  // name: string = "drink"
  // pointsrequired: number =105


  biscuits = { id: 2, name: 'biscuits', pointsrequired: 18.25 };
  drink = { id: 23, name: 'drink', pointsrequired: 50, };
  oil = { id: 3, name: 'oil', pointsrequired: 75 };
  sugar = { id: 4, name: 'sugar', pointsrequired: 80 };
  choclate = { id: 5, name: 'choclate', pointsrequired: 45 }
  vegetables = { id: 9, name: 'vegetables', pointsrequired: 35 }


  currentDate = new Date().toISOString().split('T')[0];

  constructor(private formBuilder: FormBuilder, private filesService: FileManagerService,
              private userService: UserService, private newService: RequestsService, 
              private toastr: ToastrService, private router: Router,
              private registerService: RegisterService,

  
            ) {
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    emailjs.init("23YZBgmnkBOOKXAFz");

  }



  async sendEmail() {
    const templateParams = {
      to_name: this.username,
      name: this.name,
      points_required: this.pointsrequired,
      reply_to: "no reply"
    };

    try {
      const response = await emailjs.send("service_i8ha2tq", "template_xufqp0l", templateParams);
      console.log('Email sent successfully!', response);
      this.toastr.success("Email sent successfully!");
    } catch (error) {
      console.log(send)
      console.error('Failed to send email.', error);
      this.toastr.error("Failed to send email.");
    }
  }






  submitForm(reward: any) {
    const data = {
      username: this.username,
      id: reward.id,
      name: reward.name,
      pointsrequired: reward.pointsrequired
    };
  
    this.registerService.redeemReward(data.username, data.id, data.pointsrequired, data.name).subscribe(
      response => {
        console.log('Redeem response:', response);  // This will now log the plain text response
        this.toastr.success("Reward  successfully  Redeemed");
        this.sendEmail();

      },
      error => {
        console.error('Redeem error:', error);
        if (error.status === 200) {
          // Handle the case where response is text but an error is thrown
          console.log('Redeem response (200 but not JSON):', error.error);
        } else {
          console.error('Redeem error:', error.message);
          this.toastr.error("Oops you are few points short,Earn points through purchasing");

        }
      }
    );
  }}




























  