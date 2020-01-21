import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(email: string, password: string) {
    console.log("Email: "+email+" Password: "+password);
    this.userService.login(email, password).subscribe(
      (data: any) =>{
        console.log("++Success");
          console.log(data);
      },
      (err : HttpErrorResponse) =>{
        console.log("--Errorrrrr");
        console.log(err);
      }
    );
  }
}
