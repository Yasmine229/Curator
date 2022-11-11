import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient:HttpClient) { }

  currentUser=new BehaviorSubject(null);

  savecurrentUser()
  {
    let token:any =localStorage.getItem('userToken')
    this.currentUser.next(jwtDecode(token))
    console.log(this.currentUser)

  }

  login(formData :any):Observable<any>
  {
    return this.HttpClient.post('http://localhost:5000/api/v1/users/login', formData)
  }

}
