import { Component, OnInit } from '@angular/core';
import {ApartmentService} from "../services/apartment.service";

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  public apartments = [];

  constructor(private _apartments: ApartmentService) { }

  ngOnInit() {
    this._apartments.getApartments()
      .subscribe(data => this.apartments=data)
    ;
  }

}
