import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  url = 'http://172.27.34.80:2005/api/DigRequests';
  uri = "https://localhost:7098/api/DigRequests"
  rootUrl = `${environment.localUrl}/api/DigRequests`

  constructor(private http: HttpClient) {
  }

  createRequest(data: any) {
    return this.http.post<any>(`${this.rootUrl}/AddDigRequest`, data);
  }

  getAllRequests() {
    return this.http.get<any>(this.rootUrl + '/GetAllRequests');
  }

  getRequestsByOrg() {
    let userRef = localStorage.getItem('userReference')
    return this.http.get<any>(this.rootUrl + `/GetRequestsPerOrganisation/${userRef}`);
  }

  getAllReports() {
    return this.http.get<any[]>(`${environment.localUrl}/api/Reports/GetEventReports`);
  }


}
