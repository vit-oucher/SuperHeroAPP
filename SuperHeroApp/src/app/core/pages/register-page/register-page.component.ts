import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../../validators/auth-validators";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

public registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

 public ngOnInit(): void {
this.initializeFormInRegistration();
  }

public registration() : void {
  if (this.registrationForm.valid) {
    const payload = {
      userName: this.registrationForm.get('userName')?.value,
      email: this.registrationForm.get('email')?.value,
      password: this.registrationForm.get('password')?.value,
      confPassword: this.registrationForm.get('confPassword')?.value,
    }
    console.log(payload, `payload`)
    const registeredUser = JSON.stringify(payload);
    localStorage.setItem('users', registeredUser);
  }

}

private initializeFormInRegistration(): void {

  this.registrationForm = this.fb.group({
    userName: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required, Validators.pattern( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )
    ]),
    password: new FormControl('', [
      Validators.required, Validators.pattern(/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{3})(?=.*[@#$%^&+!=]).*$/ )
    ]),
    confPassword: new FormControl('', [
      Validators.required, Validators.pattern(/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{3})(?=.*[@#$%^&+!=]).*$/ )
    ])
  }, { validators: [ passwordValidator ] });

}

}
