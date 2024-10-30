import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class FileManagerService {

  constructor(private httpClient: HttpClient) { }

  uploadFile(fileToUpload: File, requestId: number) {
    console.log(fileToUpload.name);
    const formData  = new FormData()
    formData.append('files', fileToUpload)
    formData.append('requestId', requestId.toString())
    // console.log(formData)
    let userRef = localStorage.getItem('userReference')
    console.log(userRef)
    const headers = new HttpHeaders().append("Content-Description", "multipart/form-data")
    // return this.httpClient.post('http://172.27.34.80:2005/' + `api/Files/userRef?userRef=${userRef}`,formData, {headers} )
    return this.httpClient.post('https://localhost:7098/' + `api/Files/userRef?userRef=${userRef}`,formData, {headers} )
  }

  uploadFiles(filesToUpload: File[]) {
    let formData = new FormData()
    filesToUpload.forEach((file) => {
      formData.append('', file)
    })

  }
}
