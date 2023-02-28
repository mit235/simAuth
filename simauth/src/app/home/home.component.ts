import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceService}from '../service/service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router,private service:ServiceService){}
  logout(){
    sessionStorage.removeItem('user');
    this.router.navigate(['login'])
    this.service.isLoggin.next(false);

  }

}
