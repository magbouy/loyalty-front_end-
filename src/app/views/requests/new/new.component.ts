 import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { allRequests } from '../../base/accordion/accordions.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})


export class NewComponent implements OnInit {
  requests: allRequests[] = [];
  accountCode!: string | null;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.accountCode = localStorage.getItem('accountCode');
    this.getFilteredRequests();
  }

  getFilteredRequests() {
    const url = `http://172.27.34.80:2005/api/DigRequests/get/${this.accountCode}`;

    this.httpClient.get<any>(url).subscribe(
      (response) => {
      console.log(response);
      this.requests = response;
      this.requests = response.filter(digRequest => digRequest.accountCode == this.accountCode)
    });
  }
}
/*
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
  /*selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']

})

export class AccordionsComponent implements OnInit {
  requests: allRequests[] = [];
  


  
  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.getallRequests();
  }

  getallRequests(){
    this.httpClient.get<any>('http://172.27.34.80:2005/api/DigRequests').subscribe(
      response => {
        console.log(response);
        this.requests = response;
      }
    );
  }
  }*/

  


  
    

