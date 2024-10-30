import { EditProfileService } from './edit-profile.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {RequestsService} from "./requests.service";

@Injectable({
  providedIn: 'root'
})

export class ResponsesService {
  rootUrl= `${environment.localUrl}/api/Responses`;
  //rootUrl='https://localhost:7098/api/Responses';

  constructor(private http:HttpClient,
              private requestsService: RequestsService,
              private authService:AuthService,
              private editProfileService: EditProfileService) { }

  create(payload: { message: any, responseStatus: string, userReference?: any, requestReference?: any}): Observable<any> {
    payload.userReference = this.authService.getuserId();
    return this.http.post(`${this.rootUrl}/AddResponse`, payload);
  }

  getResponse(id: number) {
    return this.http.get<any>(`${this.rootUrl}/api/DigRequests/GetRequest/${id}`);
  }

  getResponsesByAuthor() {
    let authorRef = localStorage.getItem('userReference')
    return this.http.get<any[]>(`${this.rootUrl}/GetResponsesByAuthor/${authorRef}`)
  }

  editResponse(responseItem: any) {
    return this.http.post(this.rootUrl + `/EditResponse/${responseItem.id}`, responseItem)
  }

}
