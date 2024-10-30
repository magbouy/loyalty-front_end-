import {RegisterService} from './../../../services/register.service';
import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr'
import {Router} from '@angular/router';
import {isJsxSelfClosingElement} from 'typescript/lib/tsserverlibrary';
import {Subject, debounceTime} from 'rxjs';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import jwt_decode from "jwt-decode";
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent {

  constructor(
    private http: HttpClient,
    private registerService: RegisterService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService) {
    // HttpClient is injected and ready to use

  }

  loginForm: any;
  organisationName: any = ''
  email: any = ''
  password: any = ''
  role: 'User'
  toRender!: boolean
  isActive: boolean = true;
  isSuper: boolean  = false;
  userOrg: any;

  ngOnInit(): void {
    if (this.authService.isUser) {
      this.router.navigate(["dashboard"]).then(() => {})
    }
    this.registerService.getOrgInfo().subscribe(ref => {
      this.organisationName = ref.organisation;
    });
    this.userService.getUserByReference().subscribe(res => this.userOrg = res.organisation)
    let token = localStorage.getItem('token')
    let decoded = jwt_decode(token)
    this.isSuper = decoded['role'] == 'SuperAdmin';
  }


  submitForm() {
    let submitBody = {
      username: this.email,
      email: this.email,
      password: this.password,
      organisationName: this.organisationName,
      role: this.role,
      isActive: this.isActive,
      createdByAdmin: localStorage.getItem('userReference')
    }

    console.log(submitBody)
    this.registerService.registerUser(submitBody).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          console.log("Successfully registered");
          this.router.navigate(["/base/manage-users"]).then();
        } else {
          console.log("success");
          //this.registerService.getEmail(resp.email);
          // console.log(this.email)
          // localStorage.setItem('email', this.email);
          this.toastr.success("Added Successfully")
          this.router.navigate(["/base/manage-users"]).then() ;

        }
      }
    )
  }
}
