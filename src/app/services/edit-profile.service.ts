import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  rootUrl = `${environment.localUrl}/api/Organisations`;

  constructor(private http: HttpClient) {
  }

  updateProfile(data: any) {
    localStorage.setItem('organisationName', null)
    return this.http.post(`${this.rootUrl}/AddOrganisation`, data);
  }

  storeuserId(accountCode: string) {
    console.log(`'userId',${accountCode}`)
    localStorage.setItem('accountCode', accountCode)

  }

  setorganisationName(organisationName: any) {
    localStorage.setItem('organisationName', organisationName)
    console.log(organisationName)
  }

  getorganisationName() {
    return localStorage.getItem('organisationName')
  }

}
