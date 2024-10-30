import { AuthService } from 'src/app/services/auth.service';
import { RequestsService } from '../../services/requests.service';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
 // styleUrls: ['./charts.component.css']
})

export class ChartsComponent {

  constructor(
    private http: HttpClient,
    private newService: RequestsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private datePipe: DatePipe,
    private router:Router
   ){}
  nameOfOrganisation: any;
  location: any
  purpose: any
  proposedDate: any
  endDate: any
  detailsForm!: FormGroup;

  ngOnInit(){

 this.detailsForm=this.formBuilder.group({
  nameOfOrganisation: ['',Validators.required],
  location: ['',Validators.required],
  purpose: ['',Validators.required],
  proposedDate: ['',Validators.required] ,
  endDate: ['',Validators.required],
 })
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/mm/yy');
  }

  submitForm(value:any){

let submitBody={
nameOfOrganisation:localStorage.getItem('organisationName'),
location:value.location,
purpose:value.purpose,
proposedDate:value.proposedDate,
endDate:value.endDate,
accountCode: this.authService.getuserId()
}

console.log("Submit Body: ",submitBody);

this.newService.createRequest(submitBody).subscribe(
  (  resp)=>{
console.log(resp)
// @ts-ignore
if(resp.result){
  console.log("sucessfully posted");
  this.toastr.success("Request Successfully created");
  this.detailsForm.reset();
  this.router.navigate(["charts"]);

}else{
  console.log("Failed")
}
  },
  (  error: any)=>{
    console.log("error")
    this.toastr.error("Failed, input all the required details");

  },
  ()=>{
    console.log("created")
  }
)

  }
}



































































