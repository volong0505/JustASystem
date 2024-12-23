import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';
import { clientShellRoutes } from './client-shell.router';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    provideRouter(
      clientShellRoutes
    )
  ]
})
export class ClientShellModule {}
