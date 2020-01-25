import {Component, Input, OnInit} from '@angular/core';
import {Rent} from "../../../models/rent";
import {RentService} from "../../../services/rent.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-room-request',
  templateUrl: './room-request.component.html',
  styleUrls: ['./room-request.component.css']
})
export class RoomRequestComponent implements OnInit {
  @Input() public roomReqs : Rent[];
  constructor(private rentService: RentService, private router: Router) { }

  ngOnInit() {
  }

  approveRoomReq(id: number) {
    this.rentService.approveRent(id).subscribe(
      (data)=>{
        this.router.navigate(['/staff/rents/apartments'])
      }
    );
  }

  ignoreRoomReq(id: number) {
    this.rentService.ignoreRent(id).subscribe((data)=>{
        this.router.navigate(['/staff/rents/apartments'])
      }
    );
  }
}
