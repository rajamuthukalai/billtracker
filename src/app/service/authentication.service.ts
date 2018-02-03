import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { AppSettings } from '../app.settings';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(user: User) {
    console.log(user.username);
    console.log(user.password);
    return this.http.post<Boolean>(AppSettings.API_ENDPOINT +'/authenticate', user);
  }

}