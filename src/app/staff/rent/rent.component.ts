import { Component, OnInit } from '@angular/core';
import {Rent} from "../../models/rent";
import {RentService} from "../../services/rent.service";

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  public apartmentRents: Rent[];
  public roomRents: Rent[];
  public apartsOrRooms: boolean = true;
  constructor(private rentService: RentService) { }

  ngOnInit() {
    this.rentService.getApartmentsRented().subscribe(
      (data) =>{
        console.log(data);
        this.apartmentRents = data.filter(
          d =>{
            return d.state !== 2;
          }
        );
      },
      (error) =>{
        console.log(error);
      }
    );
    this.rentService.getRoomsRented().subscribe(
      (data) =>{
        this.roomRents = data.filter(
          d =>{
            return d.state !== 2;
          }
        );
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}
