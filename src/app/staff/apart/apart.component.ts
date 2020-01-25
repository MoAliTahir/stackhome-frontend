import { Component, OnInit } from '@angular/core';
import {ApartmentService} from "../../services/apartment.service";
import {Apartment} from "../../models/apartment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apart',
  templateUrl: './apart.component.html',
  styleUrls: ['./apart.component.css']
})
export class ApartComponent implements OnInit {
  public myApartments: Apartment[];
  constructor(private apartmentService: ApartmentService, private router: Router) { }

  ngOnInit() {
    this.apartmentService.getApartmentsByOwner().subscribe(
      (data) =>{
        this.myApartments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSelect(id: number) {
    this.router.navigate(['/staff/my-apartments/view', id]);

  }
}
