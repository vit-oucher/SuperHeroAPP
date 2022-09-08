import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.initializeFormInLogin();
  }

  public login(): void {
    if (this.loginForm.valid) {

      const payload = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };

      const registeredUsers = [JSON.parse(localStorage.getItem('users') || '')];
      const authUser = registeredUsers.find((user: any) => user.email === payload.email
        && user.password === payload.password);
      if (authUser) {
        localStorage.setItem('session', JSON.stringify(authUser));
        this.router.navigate(['/Home']);
      }
    }
  }

  private initializeFormInLogin(): void {

    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });

  }


}
