import {Component, OnInit} from '@angular/core';
import {ResponsesService} from "../../../services/responses.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {
  responsesByUser: any[];
  tableSize = 10
  page = 1
  count = 10
  formModal: any;

  public visible = false;

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'Open':
        return 'badge text-bg-primary';
      case 'Under Review':
        return 'badge text-bg-warning text-white';
      case 'Approved':
        return 'badge text-bg-success text-white';
      case 'Closed':
        return 'badge text-bg-danger text-white'
      case 'Wait':
        return 'badge text-bg-primary text-white'
      case 'Proceed':
        return 'badge text-bg-success text-white'
      case 'Deny':
        return 'badge text-bg-danger text-white'
      default:
        return 'badge text-bg-danger';
    }
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  responseForm = this.formBuilder.group({
    id:[""],
    message:[""],
    decision:[""]
  })

  constructor(private responseService: ResponsesService, private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.responseService.getResponsesByAuthor().subscribe(responses => {
      this.responsesByUser = responses
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    // this.getallRequests();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    // this.getallRequests();
  }


  editResponse(response: any) {
    let userRef = localStorage.getItem('userReference')
    let responseItem = {
      id: this.responseForm.value.id,
      message: this.responseForm.value.message,
      responseStatus: this.responseForm.value.decision,
      organisationName: response.organisationName,
      userReference: response.userReference,
      requestReference: response.requestReference,
      createdOn: response.createdOn,
      hasResponse: response.hasResponse
    }

    this.responseService.editResponse(responseItem).subscribe(result => {
      console.info(result)
      window.location.reload()
    })
  }

  appendForm(response: any) {
    this.responseForm.patchValue({
      id: response.id,
      decision: response.decision,
      message: response.message,
    });
  }
}
