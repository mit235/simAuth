import { Component } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Observable } from 'rxjs';

// export interface Auth{
//   username:string,
//   email:string,
//   password:string
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private service: ServiceService) {}

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  registerUser() {
    if (this.registerForm.valid) {
      this.service
        .checkEmailExists(this.registerForm.value.email)
        .subscribe((res:any) => {
          if (res && res.length>0 ) {
            console.warn(res)
            alert('This mail id is already registerd..');
          } else {
            this.service.registerUser(this.registerForm.value).subscribe(
              (data) => {
                console.log('data send ', data);
                this.registerForm.reset();
                alert('Register successfully..');
              },
              (error): void => {
                console.warn(error);
              }
            );
          }
        });
    } else {
      alert('Please Enter valid Data');
    }
  }
}
