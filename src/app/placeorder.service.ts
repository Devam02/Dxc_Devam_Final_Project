import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  constructor(private http:HttpClient) { }

  placeorder(placeorderdata)
  {
    
    return this.http.post('/api/authenticate', JSON.stringify(placeorderdata));
  }
}
