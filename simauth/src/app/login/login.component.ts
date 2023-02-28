import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import {FormControl,Validators,FormControlName,FormGroup} from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:ServiceService,private router:Router){}

  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  loginUser(){
    this.service.userLogin(this.loginForm.value).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        console.warn('user Logged IN ');
        sessionStorage.setItem('user',JSON.stringify(result.body));
        this.service.isLoggin.next(true);
        this.router.navigate(['home'])
      }
      else{
        console.warn("yor are not valid user");
        this.router.navigate(['register'])
      }
    })
  }

}
