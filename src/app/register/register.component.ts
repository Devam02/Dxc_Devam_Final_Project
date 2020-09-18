import { RegisterService } from './../register.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private reg:RegisterService) { }
  arr=[];

  ngOnInit(): void {
  }

  appen(s)
  {
    this.arr.push(s);
  }
  register()
  {
   this.reg.register(this.arr[0].viewModel,this.arr[1].viewModel,this.arr[2].viewModel,this.arr[3].viewModel);
  }

}
