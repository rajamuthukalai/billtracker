import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  isLoggedIn: boolean;
  username: string;

  constructor() { }

}
