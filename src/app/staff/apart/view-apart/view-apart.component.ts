import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApartmentService} from "../../../services/apartment.service";
import {Apartment} from "../../../models/apartment";

@Component({
  selector: 'app-view-apart',
  templateUrl: './view-apart.component.html',
  styleUrls: ['./view-apart.component.css']
})
export class ViewApartComponent implements OnInit {
  public apartment: Apartment;
  public images: string[];
  constructor(private route: ActivatedRoute, private apartmentService: ApartmentService, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.apartmentService.getApartmentByIdFromServer(id)
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
  }

}
