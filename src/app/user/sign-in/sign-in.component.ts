import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(email: string, password: string) {
    console.log("Email: "+email+" Password: "+password);
    this.userService.login(email, password).subscribe(
      (data: any) =>{
          localStorage.setItem("userToken", data.token);
          this.router.navigate(['/']);
      },
      (err : HttpErrorResponse) =>{
        this.isLoginError = true;
      }
    );
  }
}
