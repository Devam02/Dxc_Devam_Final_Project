




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
    return this.http.get(
      'https://my-json-server.typicode.com/Devam02/FakeServer/users?id='+username+'&&name='+password )      
  }

  logout()
  {
    //Logout ka code;
  }
}
