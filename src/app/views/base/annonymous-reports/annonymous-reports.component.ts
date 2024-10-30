import { Component, OnInit } from '@angular/core';
import { ResponsesService } from './../../../services/responses.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from "jwt-decode";

export class allReports {
  constructor(
    public location: string,
    public eventDetails: string,
    public accountCode: string,
    public reportedOn: string,
    public fullName: string,
    public phonenumber: string,
    private selectedOption: string = '',
    private responsesService: ResponsesService,
    private formBuilder: FormBuilder,
  ) { }
}




@Component({
  selector: 'app-annonymous-reports',
  templateUrl: './annonymous-reports.component.html',
  styleUrls: ['./annonymous-reports.component.scss']
})

export class AnnonymousReportsComponent implements OnInit {
  requests: allReports[] = [];
  POSTS: any;
  page: number = -1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: number[] = [5, 10, 15, 20];
  formModal: any;
  closeResult: string;
  selectedItem: string = '';
  decision: string;
  isUser: boolean
  userRole: any

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private authService: AuthService,
    private responsesService: ResponsesService, // Add ResponsesService as a dependency
  ) { }

  ngOnInit(): void {
    this.getallReports();
    this.userRole = jwt_decode(localStorage.getItem('token'))
    this.isUser = this.userRole.role == "User"
  }

  getallReports() {
    this.httpClient.get<any>('http://172.27.34.80:2005/api/Reports/GetEventReports').subscribe(
      response => {
        this.requests = response;
      }
    );
  }
     public message:any
     private responderOrganisation : "zol"
     private authorCode:any


  submitForm() {
    let responseStatus: any;
    if(this.decision == 'proceed') {
      responseStatus = 0
    } else if(this.decision == 'wait') {
      responseStatus = 1
    } else if (this.decision == 'deny') {
      responseStatus = 2
    }
    this.responsesService.create({message: this.message, responseStatus: responseStatus}).subscribe(
      response => {
        console.log(response);

        if (response.result) {
          console.log('Successfully reported');
        } else {
          console.log('Error');
        }
      },
      error => {
        console.log('Error occurred:', error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getallReports();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getallReports();
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
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
  populateInput(event: any) {
    this.selectedItem = event.target.value;
}

}
