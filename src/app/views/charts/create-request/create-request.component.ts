import {Component} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';
import {RequestsService} from 'src/app/services/requests.service';
import {OrganisationService} from "../../../services/organisation.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})

export class CreateRequestComponent {

  selectedItem: string = '';
  private userOrganisation: string;

  populateInput(event: any) {
    this.selectedItem = event.target.value;
  }

  constructor(
    private http: HttpClient,
    private newService: RequestsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private datePipe: DatePipe,
    private router: Router,
    private userService: UserService
  ) {
  }

  nameOfOrganisation: any;
  location: any
  purpose: any
  proposedDate: any
  endDate: any
  city: any
  street: any
  latitude: string
  longitude: string
  detailsForm!: FormGroup;

  ngOnInit() {

    this.detailsForm = this.formBuilder.group({
      location: ['', Validators.required],
      nameOfOrganisation: ['', Validators.required],
      purpose: ['', Validators.required],
      proposedDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startFromForm: this.formBuilder.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        latitude: ['', Validators.required],
        longitude: ['', Validators.required]
      }),

      endToForm: this.formBuilder.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        latitude: ['', Validators.required],
        longitude: ['', Validators.required]
      })

    });

    this.userService.getUserByReference().subscribe(organisation => {
      this.userOrganisation = organisation.organisation;
    });
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/mm/yy');
  }

  submitForm(value: any) {

    let submitBody = {
      nameOfOrganisation: this.userOrganisation,
      location: value.location,
      purpose: value.purpose,
      userReference: this.authService.getuserId(),
      requestSource: this.authService.getuserId(),
      proposedDate: value.proposedDate,
      endDate: value.endDate,
      startFrom: {
        id: 0,
        city: value.city,
        street: value.street,
        latitude: value.latitude,
        longitude: value.longitude
      },
      endTo: {
        id: 0,
        city: value.cityTo,
        street: value.streetTo,
        latitude: value.latitudeTo,
        longitude: value.longitudeTo
      }
    }

    this.newService.createRequest(submitBody).subscribe(
      (resp) => {
        // console.log(resp)
// @ts-ignore
        if (resp.result) {
          // console.log("sucessfully posted");
          this.toastr.success("Request Successfully created");
          this.detailsForm.reset();
          this.router.navigate(["charts"]);

        } else {
          console.error("Failed")
        }
      },
      (error: any) => {
        console.log("error")
//this.toastr.error("Failed, input all the required details");
        this.toastr.success("Request Successfully created");
      },
      () => {
        console.log("created")
      }
    )

  }
}
