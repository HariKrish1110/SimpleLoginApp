

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import{ MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule,MatInputModule,MatSelectModule,BrowserAnimationsModule],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ],
 
  
})
export class AppModule { }

