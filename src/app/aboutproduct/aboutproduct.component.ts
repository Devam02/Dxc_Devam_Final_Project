import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutproduct',
  templateUrl: './aboutproduct.component.html',
  styleUrls: ['./aboutproduct.component.css']
})
export class AboutproductComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {

    
   
    
    
    
  }
  about(){

    var about_object=JSON.stringify('token')

    if(about_object.length==4)
    {
       this.route.navigate(['/login'])

    }
    else
    {
      this.route.navigate(['/placeorder'])
    }

  }

}
