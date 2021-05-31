

import { OverlayOutsideClickDispatcher } from '@angular/cdk/overlay';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormControlName,FormGroup, FormGroupName} from '@angular/forms';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
   
 userForm=new FormGroup
 ({
   fname:new FormControl(""),
   lname:new FormControl(""),
    age:new FormControl(""),
   number:new FormControl(""),
   male:new FormControl(""),
   female:new FormControl("")
   
 })
 
 onSubmit(){
   console.log(this.userForm.value);
   

   
 }weblist:any = [
   {value: 'fname',viewValue:'1'}];
 
};

