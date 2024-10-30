import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Organisation} from "../models/organisation.model";
import {environment} from "../../environments/environment";
import {log10} from "chart.js/types/helpers";

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  rootUrl = `${environment.localUrl}/api/Organisations`

  constructor(private http: HttpClient) {
  }

  addOrganisation(payload: any) {
    return this.http.post(this.rootUrl + '/AddOrganisation', payload);
  }

  getOrganisations() {
    console.log(`Orgs fetch`)
    return this.http.get<Organisation[]>(this.rootUrl + '/GetOrganisations');
  }

  getOrganisationByUserId() {
    let userRef = localStorage.getItem('userReference')
    return this.http.get<any>(this.rootUrl + '/GetOrganisationByUserId/' + userRef.toString())
  }

  getOrganisationByName(name: string) {
    return this.http.get(this.rootUrl + '/GetOrganisationByName/' + name)
  }

  getOrganisationById(id: number) {
    return this.http.get<Organisation>(this.rootUrl + `/GetOrganisationById/${id}`);
  }

  editOrganisation(id: number, newOrgDto: Organisation) {
    return this.http.post(this.rootUrl + `/EditOrganisation/${id}`, newOrgDto);
  }
}
