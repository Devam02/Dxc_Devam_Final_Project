import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username,password)
  {
    alert(username)
    alert(password)
    
  //Login ka code 
  }

  logout()
  {
    //Logout ka code;
  }
}
