import { Component, OnInit } from '@angular/core';
import { ResponsesService } from './../../../services/responses.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';




export class allResponses {
  constructor(
    public responderOrganisation: string,
    public message: string,
    public authorCode: string,
    public createdOn: string,
    public responseStatus: string,
    public requestReference: string,
    private selectedOption: string = '',
    private responsesService: ResponsesService,
    private formBuilder: FormBuilder,
    public organisationName: string
  ) { }
}


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit {
  requests: allResponses[] = [];
  POSTS: any;
  page: number = -1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: number[] = [5, 10, 15, 20];
  formModal: any;
  closeResult: string;
  selectedItem: string = '';

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private authService: AuthService,
    private responsesService: ResponsesService, // Add ResponsesService as a dependency
  ) { }

  ngOnInit(): void {
    this.getallResponses();

  }

  getallResponses() {
    this.httpClient.get<any>('http://172.27.34.80:2005/api/Responses/GetAllResponses').subscribe(
      response => {
        this.requests = response;
        console.log(response);
      }
    );
  }
     public message:any
     private responderOrganisation : "zol"
     private authorCode:any
     decision: string
    
     

  submitForm() {

   let responseStatus: any;

    this.responsesService.create({message: this.message, responseStatus: responseStatus }).subscribe(
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
    this.getallResponses();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getallResponses();
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


///second modal
open1(content) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    },
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason1(reason)}`;
    },
  );
}

private getDismissReason1(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }

}}
