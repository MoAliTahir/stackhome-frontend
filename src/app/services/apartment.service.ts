import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apartment} from "../apartment";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartmentsList = [];
  @Output() public eventEmitter = new EventEmitter();

  constructor(private http: HttpClient) {}

  getApartmentsFromServer(): Observable<Apartment[]>{
    return this.http.get<Apartment[]>(environment.url + "/apartments.json").pipe(
      tap(apartments =>{
        console.log(apartments);
      }),
      catchError(err => {
        return of(null); //of makes an observable
      })
    );
  }
  getApartmentByIdFromServer(id:number): Observable<Apartment>{
    return this.http.get<Apartment>(environment.url + "/apartments/"+id + ".json").pipe(
      tap(apart =>{
        console.log("From getApartmentByIdFromServer ",apart);
      }),
      catchError(err => {
        return of(null);
      })
    );
  }

  getApartments(){
    this.getApartmentsFromServer()
      .subscribe(
        (data) => {
          this.apartmentsList=data
        },
        (error) => {
            console.log("No data found");
        }
        ,
        () => {
          this.eventEmitter.emit(this.apartmentsList);
        })
    ;
  }

  getApartmentById(id: number)
  {
    let apartment = this.apartmentsList.find(
      (apartment) => {
        return apartment.id === id;
      }
    );
    if (apartment)
      return apartment;
    else
    {
      this.getApartmentByIdFromServer(id)
        .subscribe(
          (data) => {
            return data;
            //console.log("From getApartmentById : ", apartment);
          },
          (error) => {
            console.log("From getApartmentById : No deta found");
          }
        );

      //return apartment;
    }

  }
}
