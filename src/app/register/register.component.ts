import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators  } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name : new FormControl(null , [Validators.minLength(10) ,Validators.required ,Validators.maxLength(20)] ),
    email : new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl(null , [Validators.required , Validators.pattern('^[A-Z][a-z0-9]{2,9}') ]),
    passwordConfirm: new FormControl(null , [Validators.required]),
  })


  submitRegisterForm(registerForm: FormGroup)
  {
     console.log(registerForm .value)
  }
 




  constructor() { }

  ngOnInit(): void {
  }

}
