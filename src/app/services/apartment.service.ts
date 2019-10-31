import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apartment} from "../apartment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private _url: string = "http://localhost:8000/apartments.json";

  constructor(private http: HttpClient) { }

  getApartments(): Observable<Apartment[]>{
    return this.http.get<Apartment[]>(this._url);
  }
}
