import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  register(username,email,password,confirmpassword){

    alert(username);
    alert(email);
    alert(password);
    alert(confirmpassword);


  }
}
