import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrerComponent } from './registrer/registrer.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegistrerComponent
  ],
  exports: [
    LoginComponent,
    RegistrerComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class AuthModule { }
