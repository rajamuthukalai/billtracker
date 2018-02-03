import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../model/user';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthenticationService) { }

  user: User = new User();
  isAuthenticated: Boolean = false;

  login(user: User) {
    console.log(this.isAuthenticated);

    this.auth.authenticate(user).subscribe(      
      data =>  {
        console.log("data:" + data);
        this.isAuthenticated = data;
        console.log(this.isAuthenticated);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // client side error
          console.log('Client side error occurred: ', err.error.message)
        } else {
          // server side error
          console.log('Server side error occurred, error code: ${err.status}, body: ${err.error}');
        }
      }
    )   
  }

}