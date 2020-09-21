import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {

  posts:any[];
 

  constructor(http:HttpClient,private route:Router) { 
    var users=localStorage.getItem('token')
    if(users && users.length>4)
    {
      http.get('https://my-json-server.typicode.com/Devam02/FakeServer/users?id='+users.charAt(7))
      .subscribe(response=>{
        console.log(response)
        })  
    }
    else
    {
      this.route.navigate(['/login'])
    }
  
  }

  ngOnInit(): void {
  }
  
}
