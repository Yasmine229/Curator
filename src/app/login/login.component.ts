import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormControl , Validators  } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  error:string='';

  constructor(private AuthService:AuthService ,private Router:Router) { }
  loginForm = new FormGroup({
    email : new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl(null , [Validators.required ]),
  })


  submitloginForm(loginForm : FormGroup)
  {
    this.AuthService.login(loginForm.value).subscribe(response=>{
      if(response.status == "success"){
        localStorage.setItem('userToken' , response.token);
        this.AuthService.savecurrentUser();
       this.Router.navigate(['/dashboard'])
       console.log(loginForm.value)
      }else{
        this.error = response.massege
      }
    })
   

    
    
  }


  ngOnInit(): void {
  }

}
