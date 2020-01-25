import {Component, Input, OnInit} from '@angular/core';
import {Rent} from "../../../models/rent";
import {RentService} from "../../../services/rent.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apart-request',
  templateUrl: './apart-request.component.html',
  styleUrls: ['./apart-request.component.css']
})
export class ApartRequestComponent implements OnInit {

  @Input() public apartmentReqs : Rent[];
  constructor(private rentService: RentService, private router: Router) { }

  ngOnInit() {
  }

  approveApartReq(id: number) {
    this.rentService.approveRent(id).subscribe(
      (data)=>{
        this.router.navigate(['/staff/rents/apartments'])
      }
    );
  }

  ignoreApartReq(id: number) {
    this.rentService.ignoreRent(id).subscribe(
      (data)=>{
        this.router.navigate(['/staff/rents'])
      }
    );
  }
}
