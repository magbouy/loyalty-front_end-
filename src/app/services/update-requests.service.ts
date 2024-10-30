import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {EditProfileService} from './edit-profile.service';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UpdateRequestsService {

  rootUrl = `${environment.localUrl}/api/DigRequests`;

  constructor(private http: HttpClient, private authService: AuthService, private editProfileService: EditProfileService) {
  }

  create(body): Observable<any> {
    const accountCode = this.authService.getuserId();
    return this.http.post(`${this.rootUrl}/EditRequest/${body.id}`, body);
  }
}

