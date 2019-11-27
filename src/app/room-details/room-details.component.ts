import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RoomService} from "../services/room.service";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  public roomId;
  public room;
  public images = [];
  public map: any = { lat: 51.678418, lng: 7.809007 };
  constructor(private route: ActivatedRoute, private roomService: RoomService,  private router: Router) { }

  ngOnInit() {
    this.roomId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.roomService.getRoomById(this.roomId)
      .subscribe(
        (data) =>{
          if (! data)
          {
            this.router.navigate(["/error"]);
          }
          this.room = data;
          this.images = [
            data.img1,
            data.img2,
            data.img3
          ];
          this.images = this.images.filter(
            (image) =>{
              return image !== null;
            }
          );
        },
        (error => {
          console.log("From getRoomById: No data found");
        })
      );

  }

}
