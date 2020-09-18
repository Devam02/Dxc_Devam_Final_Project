import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

username:string;
password:string;
checkbox:string;
arr=[];
  ngOnInit(): void {
  }

  appen(s)
  {
    this.arr.push(s);
  }

  login()
  {
     this.authService.login(this.arr[0].viewModel,this.arr[1].viewModel);
    //this.arr[0].viewModel,this.arr[1].viewModel,this.arr[2].viewModel
    
  }
  logout()
  {
    this.authService.logout()
  }

}
