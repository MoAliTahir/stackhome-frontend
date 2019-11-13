import { Component, OnInit } from '@angular/core';
import {ApartmentService} from "../services/apartment.service";
import {Router} from "@angular/router";
import {RoomService} from "../services/room.service";

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  public apartments = [];
  public rooms = [];

  constructor(private _apartments: ApartmentService, private _roomService: RoomService, private _router: Router) { }

  ngOnInit() {
    this._apartments.getApartments();
    this._apartments.eventEmitter.subscribe(
      (data) => {
        this.apartments=data;
        console.log(data);
      },
      (error) => {
        console.log("No data found");
      }
      );

    this._roomService.getRooms()
      .subscribe(
        (data) =>{
          this.rooms = data;
        },
        error => {
          console.log("No data found");
        }
      );
  }

  onSelect(apartment){
    this._router.navigate(['/apartments/detail', apartment.id]);
  }

  onSelectRoom(room) {
    this._router.navigate(['/rooms/detail', room.id])
  }
}
