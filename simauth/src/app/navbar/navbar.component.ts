import { Component } from '@angular/core';
import{ServiceService} from '../service/service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // isDis:boolean=(this.service.isLoggin==true);
 isDis:any;
constructor(private service:ServiceService){
  this.service.isLoggin.subscribe((res)=>{
this.isDis=res;
  })
}


}
