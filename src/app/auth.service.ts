




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }
cred:Object;
  login(username,password)
  {
    this.cred= {"username": username ,"password":password}
    return this.http.post(
      '/api/authenticate', JSON.stringify(this.cred))      
  }

  logout()
  {
    //Logout ka code;
  }
}
