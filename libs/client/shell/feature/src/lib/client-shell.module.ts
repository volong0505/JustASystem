import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { clientShellRoutes } from './client-shell.router';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    provideRouter(
      clientShellRoutes
    )
  ]
})
export class ClientShellModule {}
