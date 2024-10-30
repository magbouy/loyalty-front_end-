import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {PlatformUser} from "../models/platformUser";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  rootUrl = `${environment.localUrl}/api/PlatformUsers`

  private processUserRole() {
    let tokenValue = localStorage.getItem('token')
    let user_payload = `${tokenValue}`.split('.')[1]
    let userdata = JSON.parse(atob(user_payload))
    return userdata['role']
  }


  getAllUsers() {
    let userRef = this.authService.getuserId();
    let role = this.processUserRole();
    if (role == 'SuperAdmin') {
      return this.http.get<PlatformUser[]>(this.rootUrl + '/GetAllPlatformUsers');
    } else {
      return this.http.get<PlatformUser[]>(this.rootUrl + '/GetPlatformUsersByAdminRef/users/' + userRef);
    }
  }

  removeUser(id) {
    return this.http.delete(this.rootUrl + `/RemovePlatformUser/${id}`);
  }

  getUserByReference() {
    let userRef = localStorage.getItem('userReference')
    return this.http.get<any>(this.rootUrl + '/GetPlatformUserByUserRef/user/' + userRef)
  }

  editUsers(id: number, newUserData) {
    return this.http.post(this.rootUrl + `/EditPlatformUser/${id}`, newUserData);
  }

  getUserById(id: number) {
    return this.http.get<any>(this.rootUrl + `/GetPlatformUser/${id}`);
  }
}
