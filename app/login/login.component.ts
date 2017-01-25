import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../login-service/login.service';

import { User } from '../user/user-class';

@Component ({
  moduleId : module.id, 
  selector : 'user-login',
  //template : '<div>Hi</div>'
  templateUrl : './login.component.html'
})

export class LoginComponent {
//   userLoginForm : any;

//   constructor (private formBuilder : FormBuilder, private router : Router) { 

//   this.userLoginForm = this.formBuilder.group({ 
//     'name' : ['', Validators.required ],
//     'email' : ['', Validators.required, LoginService.emailValidator ],
//     'password' : ['', Validators.required, LoginService.passwordValidator]

//   });
// }

// saveUser() {
//   if (this.userLoginForm.dirty && this.userLoginForm.valid) {
//     //alert(`Name: ${this.userLoginForm.value.name} Email: ${this.userLoginForm.value.email}`);
//     this.router.navigate(['grocery-store']);
//   }
// }

  //model = new User("charan@mailinator.com", "1234qwerty5");
  submitted = false;

  loginForm : FormGroup;

  constructor(formBuilder : FormBuilder, private router : Router){
    this.loginForm = formBuilder.group({
      "email" : ['charan@mailinator.com', Validators.required],
      //"password" : ['12345qwerty', Validators.required]
      "password" : ['12345qwerty', Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  doLogin() { 
    this.submitted = true; 
    this.router.navigate(['grocery-store']);
  }
  
  reset() {
    //this.model = new User("", "");
    //this.loginForm.patchValue({'email': '', password: ''})
    this.loginForm.reset();
  }
}