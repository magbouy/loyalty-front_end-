import {AuthService} from './../../../services/auth.service';
import { ModalModule } from '@coreui/angular';

import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormControl, Validators, } from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import jwtDecode from "jwt-decode";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private http: HttpClient, private authService: AuthService,
              private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {

  }

  loginForm: any;
  username: any
  password: any
  adminemail: any
  adminpassword: any


  ngOnInit(): void {

  }

  setOrgRef(tokenString) {
    let userData:any = jwtDecode(tokenString)
    localStorage.setItem('Access', userData.orgRef)
  }

  submitForm() {

    let submitBody = {
      username: this.username,
      password: this.password
    }
    this.authService.login(submitBody).subscribe(
      resp => {

        if (resp.result) {
          // this.authService.storeToken(resp.token);
          // this.authService.storeusername(resp.username);
          this.toastr.success("Success");
         

        } else {


          this.fetchUserData(this.username).subscribe(
            userData => {
              console.log("User Data:", userData);
              this.toastr.success("User data fetched successfully!"); });

          console.error("Failed")
          this.toastr.success("Success");
          localStorage.setItem('username', this.username);

          this.router.navigate(["/dashboard"]).then(() => {
            window.location.reload();
          });

        }
      },
      error => {
        this.toastr.error("Failed, Verify your Credentials.");
        console.log("verify your credentials")
      },
      () => {
        console.log("Successfull")
      }
    )


  }


  // Fetch user data dynamically using username
fetchUserData(username: string) {
  // const url = `http://localhost:9002/api/user/${username}`; // Dynamic URL using the username
  const url = `http://localhost:9002/api/user/{username}`; // Dynamic URL using the username

  return this.http.get(url);
}



}

