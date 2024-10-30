
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  create(submitBody: { userName: any; email: any;  password: any; organisationName: any}) {
    throw new Error('Method not implemented.');
  }
  private registerUrl = 'http://172.27.34.80:2005/api/Auth/register-'; // Replace with your actual register API endpoint
  private registerUri = 'https://localhost:7098/api/Auth/register-'; // Replace with your actual register API endpoint
  rootUrl = `${environment.localUrl}/api/Auth`
  constructor(private http: HttpClient) { }

  uri = "http://localhost:9002/api/v1"
  awarduri = "http://localhost:9002/api/operator/awardpoints"
  redeemuri = "http://localhost:9002/api/user/redeemreward"
  redeemurii = "http://localhost:9002/api/user/redeemreward"


  awardPoints(operatorId: string, username: string, points: number): Observable<any> {
    // Prepare form data using HttpParams
    let params = new HttpParams()
      .set('operatorId', operatorId)
      .set('username', username)
      .set('points', points);

    // Prepare headers for form data (x-www-form-urlencoded)
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    // Make POST request with the form data
    return this.http.post(this.awarduri, params.toString(), { headers: headers });
  }


  redeemReward(username: string, id: any, pointsrequired: any, name: string) {
    // Create a FormData object to send form data
    let formData = new FormData();
    formData.append('username', username);
    formData.append('id', id);
    formData.append('pointsrequired', pointsrequired);
    formData.append('name', name);
  
    // Set responseType to 'text' to handle non-JSON responses
    return this.http.post(this.redeemuri, formData, { responseType: 'text' });
  }

  // redeemReward(username: string, id: any, pointsrequired: any, name: string) {
  //   // Create a FormData object to match the Postman request
  //   let formData = new FormData();
  //   formData.append('username', username);
  //   formData.append('id', id);
  //   formData.append('pointsrequired', pointsrequired);
  //   formData.append('name', name);
  
  //   // Sending as FormData now (similar to Postman)
  //   return this.http.post(this.redeemuri, formData);
  // }

  // redeemReward(username: string, id: any, pointsrequired: any, name: string) {
  //   let params = new HttpParams()
  //     .set('username', username)
  //     .set('id', id)
  //     .set('pointsrequired', pointsrequired)
  //     .set('name', name);
  
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });
  
  //   // Explicitly set the response type to 'text'
  //   return this.http.post(this.redeemuri, params.toString(), { headers: headers, responseType: 'text' });
  // }




  // redeemReward(username:string, id:any , name:string , pointsrequired:any ) {
  //   // Prepare form data using HttpParams
  //   let params = new HttpParams()
  //     .set('username', username)
  //     .set('id', id)
  //     .set('pointsrequired', pointsrequired)
  //     .set('name',name)

  //     // Prepare headers for form data (x-www-form-urlencoded)
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });


  //     return this.http.post(this.redeemuri, params.toString(), { headers: headers });
  // }



  award(data: any) {
    return this.http.post<any>(`${this.awarduri}` +`/awardpoints`, data, { responseType: 'json' });
  }


  redeem(data: any) {
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });


    return this.http.post<any>(`${this.redeemurii}` +`/redeemreward`, data, { responseType: 'json' });
  }

  registerUser(data: any) {
    return this.http.post<any>(`${this.uri}` +`/register`, data, { responseType: 'json' });
  }







  
  register(userData: any) {
    console.log(userData)
    return this.http.post<any>(this.rootUrl+'/register', userData)
  }h

  registerAdmin(userData: any) {
    console.log(userData)
    return this.http.post<any>(this.rootUrl + '/register-'+`admin`, userData);
  }

  getOrgInfo() {
    let userRef = localStorage.getItem('userReference')
    // return this.http.get<any>(`http://172.27.34.80:2005/api/PlatformUsers/GetPlatformUserByUserRef/user/${userRef}`)
    return this.http.get<any>(`${environment.localUrl}/api/PlatformUsers/GetPlatformUserByUserRef/user/${userRef}`)
  }
  storeEmail(email:string){
    localStorage.setItem ('email',email)
   }
   getEmail(){
     return localStorage.getItem('email')



     
}}
