import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  showSignUpForm = false
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.login()
  this.signUp()
  }

  showSignUp(status:any){
   if(status == 'signUp'){
    this.showSignUpForm = true
   }else{
    this.showSignUpForm = false
   }
  }

  login(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  signUp(){
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fName: ['', [Validators.required, Validators.required]],
      cPassword: ['', [Validators.required, Validators.minLength(15)]],
      password: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  onSubmit(form: any){
    console.log(form.value)
  }

}
