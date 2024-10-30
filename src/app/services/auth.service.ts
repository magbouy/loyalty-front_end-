import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import jwt_decode from "jwt-decode"
import {UserData} from "../models/userdata";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_NAME = 'auth_token'
  isUser = false;
  isAdmin = false;
  isSuperUser = false;
  public userdata: UserData;

//isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token() {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  url = 'http://172.27.34.80:2005';
  loginuri = "http://localhost:9002/api/v1"
;

  constructor(private http: HttpClient) {
  }


  login(data: any) {
    return this.http.post(`${this.loginuri}/authenticate`, data).pipe(tap((response: any) => {

      // localStorage.setItem('username', data);
  
  console.log('Username saved in local storage');

    }));
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
    this.generateUserData(tokenValue)
    let decoded: any = jwt_decode(tokenValue)
  }

  private generateUserData(tokenValue: string):any {
    let user_payload = `${tokenValue}`.split('.')[1]
    this.userdata = JSON.parse(atob(user_payload))
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  storeusername(username: string) {
    // console.log(`'userId',${accountCode}`)
    localStorage.setItem('username', username)
  }

  getuserId() {
    return localStorage.getItem('userReference')
  }
}
