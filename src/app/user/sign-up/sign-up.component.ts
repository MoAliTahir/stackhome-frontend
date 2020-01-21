import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {stringify} from "querystring";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  full_name : string;
  email : string;
  phone_number: number;
  id_card: number;
  password: string;
  image : File;

  userData = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userData = {
      "full_name": this.full_name,
      "email": this.email,
      "phone_number": this.phone_number,
      "id_card": this.id_card,
      "password": this.password,
      "admin": false,
      "active": true,
      "staff": false,
    };
    console.log(this.userData);
    this.userService.register(this.userData).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      });
  }
}
