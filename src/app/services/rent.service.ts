import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Rent} from "../models/rent";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) { }

  getApartmentsRented(): Observable<Rent[]> {
    let reqHeader = new HttpHeaders({'Authorization': 'Token '+localStorage.getItem('userToken')});
    return this.http.get<Rent[]>(environment.url + "/apartments/rents/", { headers: reqHeader } );
  }
  getRoomsRented(): Observable<Rent[]> {
    let reqHeader = new HttpHeaders({'Authorization': 'Token '+localStorage.getItem('userToken')});
    return this.http.get<Rent[]>(environment.url + "/rooms/rents/", { headers: reqHeader } );
  }
  approveRent(id: number) {
    let reqHeader = new HttpHeaders({'Authorization': 'Token '+localStorage.getItem('userToken')});
    return this.http.post(environment.url + "/rent/"+id+"/approve/", null, { headers: reqHeader } );
  }

  ignoreRent(id: number) {
    let reqHeader = new HttpHeaders({'Authorization': 'Token '+localStorage.getItem('userToken')});
    return this.http.post(environment.url + "/rent/"+id+"/ignore/", null, { headers: reqHeader } );
  }
}
