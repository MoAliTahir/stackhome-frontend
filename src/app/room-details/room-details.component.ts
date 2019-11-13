import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RoomService} from "../services/room.service";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  public roomId;
  public room;
  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit() {
    this.roomId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.roomService.getRoomById(this.roomId)
      .subscribe(
        (data) =>{
          this.room = data
        },
        (error => {
          console.log("From getRoomById: No data found");
        })
      );

  }

}
