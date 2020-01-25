import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../services/room.service";
import {Room} from "../../models/room";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  private myRooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRoomsByOwner().subscribe(
      (data) =>{
        this.myRooms = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
