import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

isLoggin=new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient) { }
  url=  'http://localhost:3000/users';

 registerUser(inputData:any){
 return this.http.post(this.url,inputData)
 }

 
 checkEmailExists(email: any){
  return this.http.get(`http://localhost:3000/users?email=${email}`)

}
  userLogin(data:any){
   return  this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'})
  }
}
