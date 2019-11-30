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
  slides: any = [[]];
  roomSlides : any =[[]];

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  constructor(private _apartments: ApartmentService, private _roomService: RoomService, private _router: Router) { }

  ngOnInit() {

    this._apartments.getApartments();
    this._apartments.eventEmitter.subscribe(
      (data) => {
        this.slides = this.chunk(data, 3);
        console.log(data);
      },
      (error) => {
        console.log("No data found");
      }
      );
    this._roomService.getRooms()
      .subscribe(
        (data) =>{
          this.roomSlides = this.chunk(data, 3);
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
