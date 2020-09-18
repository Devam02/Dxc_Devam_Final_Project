import { Router } from '@angular/router';
import { RegisterService } from './../register.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private reg:RegisterService,private router:Router) { }
  arr=[];
  registerdata:Object

  ngOnInit(): void {
  }

  appen(s)
  {
    this.arr.push(s);
  }
  register()
  {
    this.registerdata={"username" :this.arr[0].viewModel,"email":this.arr[1].viewModel,"password":this.arr[2].viewModel,"ConfirmPassword":this.arr[3].viewModel}
   this.reg.register(this.registerdata);
   this.router.navigate(['/login']);
  }


}

// username,email,password,confirmpassword
