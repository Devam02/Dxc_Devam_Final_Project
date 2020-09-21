import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {
  thankyouData:any

  constructor(private http:HttpClient ,private router:Router) { }

  placeorder(placeorderdata)
  {
    
    // return this.http.post('https://my-json-server.typicode.com/Devam02/FakeServer/users ', JSON.stringify(placeorderdata));

    console.log(placeorderdata);
    return this.http.post(' https://my-json-server.typicode.com/Devam02/FakeServer/users ', {
      method: 'POST',
      body: JSON.stringify(placeorderdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).subscribe(response=>{
      this.thankyouData=response
      this.router.navigate(['/thankyou']) 
    })
    
  }
}




