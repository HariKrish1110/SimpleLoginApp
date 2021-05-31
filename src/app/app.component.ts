import { OverlayOutsideClickDispatcher } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupName
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string;
  password: string;
  constructor() {}
  ngOnInit() {}
  LoginUser() {
    if (this.username == 'Admin' && this.password == 'admin') {
      alert('welcome');
    } else {
      alert('wrong password');
    }
  }
}
