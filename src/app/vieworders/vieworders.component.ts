import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
  posts:any[];

  constructor(http:HttpClient) { 
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response=>{

      console.log(response)



    });
  }

  ngOnInit(): void {
  }

}
