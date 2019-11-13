import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApartmentService} from "../services/apartment.service";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

  public apartmentId;
  public apartments;
  public apartment;
  constructor(private route: ActivatedRoute, private _apartments: ApartmentService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.apartmentId = id;

     this._apartments.getApartmentByIdFromServer(this.apartmentId)
       .subscribe(
         (data) => {
           this.apartment = data;
           console.log("----------> ",this.apartment);
         },
         (error) => {
           console.log("From getApartmentById : No deta found");
         }
       )
     ;
    console.log("From apartmnt-details : ", this.apartment);
    /*this._apartments.eventEmitter.subscribe(
      (data) => {
        this.apartments=data;
        console.log("----------> ", data);
      },
      (error) => {
        console.log("No data found");
      },
      () => {
        this.apartment = this.apartments.filter(
          (apartment) =>{
            return apartment.id === this.apartmentId;
          }
        );
        console.log("++++++++++++", this.apartment);
      }
    );*/

  }

}
