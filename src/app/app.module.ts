import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NgModule } from '@angular/core';
import { AgmCoreModule } from "@agm/core";
import { FormsModule } from "@angular/forms";
import { ApartmentService } from "./services/apartment.service";

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ApartmentListComponent } from './apartment-list/apartment-list.component';
import {MatCardModule} from "@angular/material/card";
import {FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApartmentListComponent,
    FooterComponent,
    routingComponents,
    PageNotFoundComponent,
    RoomDetailsComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [ApartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
