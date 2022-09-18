import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule } from '@angular/material/toolbar'
import { HttpClientModule } from '@angular/common/http';

const materialModules=[
  MatToolbarModule
]

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports:[
    ...materialModules,
    HeaderComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
