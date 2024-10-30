import {UpdateRequestsService} from './../../../services/update-requests.service';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from 'src/app/services/auth.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from "../../../services/user.service";
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {RequestsService} from "../../../services/requests.service";
import emailjs, { send } from 'emailjs-com';


@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})

export class MyRequestsComponent implements OnInit {

  requests: any[] = [];
  userReference!: string | null;
  //RequestByOrganisation!: string | null;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];
  formModal: any;
  closeResult: string;
  requestedOn: any;
  nameOfOrganisation: any;
  location: any
  purpose: string;
  proposedDate: any
  endDate: any
  city: string;
  street: string;
  startFromcity: any
  startFromstreet: any
  startFromlatitude: any;
  startFromlongitude: any;
  endTostreet: any;
  endTocity: any;
  endTolongitude: any;
  endTolatitude: any;
  latitude: string
  longitude: string
  id: any;
  userOrganisation: string;
  status: boolean = false;
  isActive: boolean;

  orgRequests: any[];


  constructor(private httpClient: HttpClient,
              private modalService: NgbModal,
              private updaterequestsService: UpdateRequestsService,
              private AuthService: AuthService,
              private userService: UserService,
              private toastr: ToastrService,
              private router: Router,
              private requestsService: RequestsService
  ) {
  }

  ngOnInit(): void {
    this.userReference = localStorage.getItem('userReference');
    this.userService.getUserByReference().subscribe(organisation => {
      this.userOrganisation = organisation.organisation;
    });

    this.getFilteredRequests();
    this.requestsService.getRequestsByOrg().subscribe(res => this.orgRequests = res)
  }

  getFilteredRequests() {
    // const url = `http://172.27.34.80:2005/api/DigRequests/GetRequestsByOrganisation/${this.userReference}`;
    // this.httpClient.get<any>(url).subscribe(
    //   (response) => {
    //     this.requests = response.filter(digRequest => digRequest.userReference == this.userReference).reverse();
    //     console.log(this.requests)
    //   });
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'Open':
        return 'badge text-bg-primary';
      case 'Under Review':
        return 'badge text-bg-warning text-white';
      case 'Approved':
        return 'badge text-bg-success text-white';
      case 'Closed':
        return  'badge text-bg-danger text-white'
      default:
        return 'badge text-bg-danger';
    }
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getFilteredRequests()
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getFilteredRequests();
  }

  // open modal
  open(content, request) {
    console.log("Modal Data", request)
    this.id = request.id;
    this.purpose = request.purpose;
    this.location = request.location;
    this.endDate = request.endDate;
    this.proposedDate = request.proposedDate;
    this.startFromcity = request.startFrom.city;
    this.startFromstreet = request.startFrom.street;
    this.startFromlongitude = request.startFrom.longitude;
    this.startFromlatitude = request.startFrom.latitude;
    this.endTocity = request.endTo.city;
    this.endTostreet = request.endTo.street;
    this.endTolatitude = request.endTo.latitude;
    this.endTolongitude = request.endTo.longitude;
    this.nameOfOrganisation = request.nameOfOrganisation;
    this.requestedOn = request.requestedOn;
    this.status = request.status;
    this.isActive = request.isActive

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },);

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  startFrom: {
    city: string,
    street: string,
    latitude: string,
    longitude: string
  }
  endTo: {
    city: string,
    street: string,
    latitude: string,
    longitude: string
  }

  submitForm() {
    let statusValue = this.status ? "Closed" : this.status;

    let body = {
      id: this.id,
      nameOfOrganisation: this.nameOfOrganisation,
      location: this.location,
      purpose: this.purpose,
      startFrom: {
        city: this.startFromcity,
        street: this.startFromstreet,
        latitude: this.startFromlatitude,
        longitude: this.startFromlongitude
      },
      endTo: {
        city: this.endTocity,
        street: this.endTostreet,
        latitude: this.endTolatitude,
        longitude: this.endTolongitude
      },
      proposedDate: this.proposedDate,
      requestedOn: this.requestedOn,
      endDate: this.endDate,
      status: statusValue,
      isActive: this.isActive,
      userReference: this.AuthService.getuserId(),
    }

    this.updaterequestsService.create(body).subscribe(
      response => {
        if (response == null) {
          this.toastr.success('Request successfully updated', 'Success');
          this.router.navigate(['/base/every-requests']);
        } else {
          this.toastr.warning('something went wrong', 'Warning');
        }
      },
      error => {
        this.toastr.error('failed to update', 'failed');
      }
    );
  }
}

