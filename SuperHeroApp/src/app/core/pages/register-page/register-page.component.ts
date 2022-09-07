import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
public emailFormControl!: FormControl;
public passwordFormControl!: FormControl;
public confirmPasswordFormControl!: FormControl;
 public hide!: boolean;
 public passwordInput!: string;
  constructor() { }

 public ngOnInit(): void {
    this.emailFormControl = new FormControl('', []);
    this.passwordFormControl = new FormControl('', []);
    this.confirmPasswordFormControl = new FormControl('', []);
  }

}
