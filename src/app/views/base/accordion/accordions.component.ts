import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


export class allRequests {
  constructor(
    public nameOfOrganisation: string,
    public location: string,
    public purpose: string,
    public status: string,
    public proposedDate: string,
    public requestedOn: string,
    public endDate: string,
    public id: number
  ) {}
}

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})

export class AccordionsComponent implements OnInit {
  requests: allRequests[] = [];
  POSTS: any;
  page:number = -1;
  count: number = 0;
  tableSize: number= 10;
  tableSizes: [5, 10,15,20]

  
  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.getallRequests();
  }

  getallRequests(){
    this.httpClient.get<any>('http://172.27.34.80:2005/api/DigRequests').subscribe(
      response => {
        this.requests = response;
        console.log(response);
      }
    );
  }
  onTableDataChange(event:any){
    this.page = event;
    this.getallRequests;
  }
  onTableSizeChange(event:any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.getallRequests;
  }

  }

  

