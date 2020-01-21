import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public authUser: User;
  public isConnected: boolean = false;
  public isStaff: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    console.log("Init Header Component");
    if(localStorage.getItem('userToken') !== null)
    {
      this.userService.getUserInfo().subscribe(
        (data: User)=>{
          this.authUser = data;
          this.isConnected = true;
          this.isStaff = this.authUser.staff;
        },
        (error) => {
          console.log(error);
          this.isConnected = false;
        }
      );
    }else
    {
      this.isConnected = false;
      this.isStaff = false;
    }
  }

  logout() {
    localStorage.removeItem("userToken");
    this.ngOnInit();
    this.router.navigate(['/login']);
  }
}
