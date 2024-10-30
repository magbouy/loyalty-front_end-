import { UserData } from './../../../models/userdata';
import {ResponsesService} from './../../../services/responses.service';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ModalDismissReasons, NgbDatepickerModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from 'src/app/services/auth.service';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Router} from "@angular/router";
import { UserService } from 'src/app/services/user.service';


declare var window: any;


// export class allRequests {
//   constructor(
//     public nameOfOrganisation: string,
    
//     public id: number,
   
//     private formBuilder: FormBuilder,
//   ) {
//   }

// }

// export type locationInfo = {
//   city: '',
//   longitude: '',
//   latitude: '',
//   street: '',
// }

// const ELEMENT_DATA: allRequests[] = [];

@Component({
  selector: 'app-every-requests',
  templateUrl: './every-requests.component.html',
  styleUrls: ['./every-requests.component.scss'],
})
export class EveryRequestsComponent implements OnInit {
  

  userForm: FormGroup;
  username = localStorage.getItem('username');
  // firstname:any
  lastname:any;
  phonenumber:any;
 points:number
 user: any;

 users: {
  id: number
  firstname: string
  lastname: string
  username: string
  phonenumber: number,
  password: string
  role: "USER",
  enabled: boolean,
  points: 1,
  authorities: null,
  accountNonLocked: boolean,
  credentialsNonExpired: boolean,
  accountNonExpired: boolean
 };
firstname: any;


  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: NgbModal,
    private authService: AuthService,
    private  fb       : FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService, // Add ResponsesService as a dependency
  ) {
  }




  getuser() {
    // this.orgService.getOrganisations().subscribe(orgs => {

      this.fetchUserData(this.username).subscribe(
        userData => {
          this.user = userData;
          console.log("User Data:", userData);
          console.log("user", this.user)
           });
      // this.organisationList = orgs;
    // })
  }

  // ngOnInit(): void {
  //   this.getAllOrganisations()
  // }



ngOnInit(): void {
  this.getuser()
    console.log(this.username)
    // this.fetchUserData(this.username).subscribe(
    //   userData => {
    //     console.log("User Data:", userData);
    //      });
  }


  fetchUserData(username: string) {
    // const url = `http://localhost:9002/api/user/${username}`; // Dynamic URL using the username
    const url = `http://localhost:9002/api/user/${username}`; // Dynamic URL using the username
  
    return this.http.get(url);
  }
  
}

  


 




