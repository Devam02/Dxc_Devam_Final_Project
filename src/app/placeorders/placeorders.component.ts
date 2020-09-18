import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlaceorderService } from '../placeorder.service';
 
@Component({
  selector: 'app-placeorders',
  templateUrl: './placeorders.component.html',
  styleUrls: ['./placeorders.component.css']
})
export class PlaceordersComponent implements OnInit {
 
  constructor(private porder:PlaceorderService ,private router:Router) { }
 
  ngOnInit(): void {
  }
  
  arr=[]
  appen(a)
  {
    this.arr.push(a)
  }
 
  
  
 
  placeorder(placeorderdata){
    


    this.porder.placeorder(placeorderdata)
    this.router.navigate(['/thankyou'] )








      // this.arr[0].viewModel,
      // this.arr[1].viewModel,
      // this.arr[2].viewModel,
      // this.arr[3].viewModel,
      // this.arr[4].viewModel,
      // this.arr[5].viewModel,
      // this.arr[6].viewModel,
      // this.arr[7].viewModel,
      // this.arr[8].viewModel,
      // this.arr[9].viewModel,
      // this.arr[10].viewModel,
      // this.arr[11].viewModel,
      // this.arr[12].viewModel,
      // this.arr[13].viewModel
      
  }
 
}