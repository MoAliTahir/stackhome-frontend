import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Room} from "../models/room";
import {catchError, tap} from "rxjs/operators";
import {Apartment} from "../models/apartment";
import {Rent} from "../models/rent";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomList = [];
  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(environment.url + "/rooms.json").pipe(
      tap(rooms =>{
        console.log(rooms);
      }),
      catchError(err => {
        return of(null); //of makes an observable
      })
    );
  }

  getRoomById(id: number): Observable<Room>{
    return this.http.get<Room>(environment.url+"/rooms/"+id + ".json").pipe(
      tap(
        room =>{
          console.log("From getRoomById: ", room )
        }
      ),
      catchError(
        err => {
          return of(null);
        }
      )
    )
  }

  newBooking(id: number, start_date: Date, end_date: Date) {
    let data = {
      "apartment": null,
      "room": id,
      "start_date": start_date,
      "end_date": end_date,
    };
    let reqHeader = new HttpHeaders({'Authorization': 'Token '+localStorage.getItem('userToken')});
    return this.http.post(environment.url + "/house/"+id+"/rent/", data, { headers: reqHeader} );
  }

  getRoomsByOwner(): Observable<Room[]> {
    let reqHeader = new HttpHeaders({'Authorization': 'Token '+localStorage.getItem('userToken')});
    return this.http.get<Room[]>(environment.url + "/rooms/me", { headers: reqHeader } );
  }

}
