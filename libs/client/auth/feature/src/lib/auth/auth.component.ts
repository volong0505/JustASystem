import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule } from '@angular/router';
import { LoginComponent } from '@just-a-system/client-auth-ui-login'


@Component({
  selector: 'client-auth',
  imports: [
    CommonModule,
    RouterModule,
    LoginComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
