import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(credentials){

    
    return this.http.post('/api/authenticate', JSON.stringify(credentials))


  }
}

