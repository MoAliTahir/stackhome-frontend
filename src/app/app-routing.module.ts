import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApartmentDetailsComponent} from "./apartment-details/apartment-details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AppComponent} from "./app.component";
import {ApartmentListComponent} from "./apartment-list/apartment-list.component";
import {RoomDetailsComponent} from "./room-details/room-details.component";
import {UserComponent} from "./user/user.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {StaffComponent} from "./staff/staff.component";
import {ApartComponent} from "./staff/apart/apart.component";
import {RoomComponent} from "./staff/room/room.component";
import {RentComponent} from "./staff/rent/rent.component";
import {ViewApartComponent} from "./staff/apart/view-apart/view-apart.component";
import {NewApartComponent} from "./staff/apart/new-apart/new-apart.component";
import {NewRoomComponent} from "./staff/room/new-room/new-room.component";
import {ApartRequestComponent} from "./staff/rent/apart-request/apart-request.component";
import {RoomRequestComponent} from "./staff/rent/room-request/room-request.component";


const routes: Routes = [
  { path: '', redirectTo: 'apartments', pathMatch: 'full'},
  { path: 'apartments', component: ApartmentListComponent},
  { path: 'apartments/detail/:id', component: ApartmentDetailsComponent},
  { path: 'rooms/detail/:id', component: RoomDetailsComponent},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {
    path: 'staff', component: StaffComponent,
    children: [{ path: 'my-apartments', component: ApartComponent }]
  },
  {
    path: 'staff/my-apartments', component: StaffComponent,
    children: [{
      path: 'view/:id', component: ApartComponent,
      children: [{ path: '', component: ViewApartComponent}]
    }]
  },
  {
    path: 'staff/my-rooms', component: StaffComponent,
    children: [{ path: '', component: RoomComponent }]
  },
  {
    path: 'staff', component: StaffComponent,
    children: [{
      path: 'my-apartments', component: ApartComponent,
      children: [{ path: 'new', component: NewApartComponent}]
    }]
  },
  {
    path: 'staff', component: StaffComponent,
    children: [{
      path: 'my-rooms', component: RoomComponent,
      children: [{ path: 'new', component: NewRoomComponent}]
    }]
  },
  {
    path: 'staff', component: StaffComponent,
    children: [{
      path: 'rents', component: RentComponent,
      children: [{ path: 'apartments', component: ApartRequestComponent}]
    }]
  },
  {
    path: 'staff', component: StaffComponent,
    children: [{
      path: 'rents', component: RentComponent,
      children: [{ path: 'rooms', component: RoomRequestComponent}]
    }]
  },
  { path: '**', component: PageNotFoundComponent}, //Wildcard route and Should be the last one in the config.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ApartmentDetailsComponent, ApartmentListComponent, RoomDetailsComponent, PageNotFoundComponent];
