import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiInterceptor } from '@just-a-system/client-shared-interceptors';
import { ClientShellModule } from '@just-a-system/client-shell';

@Component({
  imports: [
    ClientShellModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useValue: new ApiInterceptor(''),
      multi: true
    }
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
}
