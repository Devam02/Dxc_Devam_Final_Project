import { PlaceorderService } from './placeorder.service';
import { RegisterService } from './register.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutproductComponent } from './aboutproduct/aboutproduct.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { PlaceordersComponent } from './placeorders/placeorders.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    AboutproductComponent,
    ViewordersComponent,
    PlaceordersComponent,
    ThankyoupageComponent,
    FooterComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
    RouterModule.forRoot([
      {path:'aboutproduct', component: AboutproductComponent},
      {path:'login', component: LoginComponent},
      {path:'register', component: RegisterComponent},
      {path:'placeorder', component: PlaceordersComponent},
      {path:'vieworders', component: ViewordersComponent},
      {path:'thankyou',component:ThankyoupageComponent}
      
    ])

  ],
  providers: [
    AuthService,
    RegisterService,
    PlaceorderService,
    RouterModule,
    HttpClientModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
