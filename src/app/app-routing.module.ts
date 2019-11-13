import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApartmentDetailsComponent} from "./apartment-details/apartment-details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AppComponent} from "./app.component";
import {ApartmentListComponent} from "./apartment-list/apartment-list.component";
import {RoomDetailsComponent} from "./room-details/room-details.component";


const routes: Routes = [
  { path: '', redirectTo: 'apartments', pathMatch: 'full'},
  { path: 'apartments', component: ApartmentListComponent},
  { path: 'apartments/detail/:id', component: ApartmentDetailsComponent},
  { path: 'rooms/detail/:id', component: RoomDetailsComponent},
  { path: '**', component: PageNotFoundComponent}, //Wildcard route and Should be the last one in the config.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ApartmentDetailsComponent, ApartmentListComponent, RoomDetailsComponent, PageNotFoundComponent];
