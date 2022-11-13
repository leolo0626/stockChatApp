import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  isRegister: boolean = false;
  isRegisterFormSubmitted: boolean = false;

  registerForm!: FormGroup;
  loginForm!: FormGroup;



  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get lform(): { [key: string]: AbstractControl; }{
    return this.loginForm.controls;
  }

  get rform() : { [key: string]: AbstractControl; }{
    return this.registerForm.controls;
  }

  switchTo(page: string) {
    this.isRegister = page === 'register';
  }

  onRegister() {
    this.isRegisterFormSubmitted = true;
    if (this.registerForm.invalid) {
      console.log("Invalid Register Form");
      return; 
    }
  }

  onLogin() {
    if (this.loginForm.invalid) {
      console.log("Invalid Login Form");
      return;
    }
  }

}
