import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Room} from "../room";
import {catchError, tap} from "rxjs/operators";

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
}
