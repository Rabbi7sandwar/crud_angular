import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  showSignUpForm = false
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.login()
    this.signUp()
    this.loginForm.reset()
    this.signUpForm.reset()
  }

  showSignUp(status: any) {
    if (status == 'signUp') {
      this.showSignUpForm = true
    } else {
      this.showSignUpForm = false
    }
  }

  login() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(15)]],
    });
  
  
  }

  signUp() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fName: ['', [Validators.required, Validators.required]],
      cPassword: ['', [Validators.required, Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.maxLength(15)]],
    });
   
  }

  onSubmit(form: any,formType: string) {
   if(formType == 'register'){
    let registerRes = this.userService.register(form.value)
    if(registerRes == "true"){
      this.router.navigate(['/', 'feed']);
     }
     else{
      alert("something went wrong!!")
     }
   }else{
    let loginRes =  this.userService.login(form.value)
    if(loginRes == "true"){
      this.router.navigate(['/', 'feed']);
     }
     else{
      alert("something went wrong!!")
     }
   }
  }

}
