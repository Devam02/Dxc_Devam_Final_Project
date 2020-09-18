import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  constructor() { }

  placeorder(rupees,paise,RFirstname,Lastname,Address,city,State,pincode,country,Bfirstname,LastName,cc,cc2,email)
  {
    alert(rupees)
    alert(paise)
  }
}
