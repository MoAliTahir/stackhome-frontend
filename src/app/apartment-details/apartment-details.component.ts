import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApartmentService} from "../services/apartment.service";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

  public apartmentId;
  public apartment;
  public images = [];
  public map: any = { lat: 51.678418, lng: 7.809007 };
  constructor(private route: ActivatedRoute, private _apartments: ApartmentService, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.apartmentId = id;

     this._apartments.getApartmentByIdFromServer(this.apartmentId)
       .subscribe(
         (data) => {
           if (! data)
           {
             console.log("Data est null");
             this.router.navigate(["/error"]);
           }
           this.apartment = data;

           this.images = [
             data.img1,
             data.img2,
             data.img3,
             data.img4,
             data.img5,
             data.img6,
           ];
           this.images = this.images.filter(
             (image) =>{
               return image !== null;
             }
           );
         },
         (error) => {
           console.log("From getApartmentById : No deta found");
           console.log(error);
         }
       )
     ;
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
