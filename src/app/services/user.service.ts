import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    let data = "username="+email+"&password="+password;
    let reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post("http://localhost:8000/api-auth/login/", data, {headers: reqHeader} );

  }

  register(userData: {}) {
    let reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>('http://localhost:8000/register/', userData, {headers: reqHeader});

  }
}
