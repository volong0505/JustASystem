import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideAuthStore } from '@just-a-system/client-auth-data-access';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { appRoutes } from './app.routes';
import { ApiInterceptor } from '@just-a-system/client-shared-interceptors';
import { environment } from '../environments/environment';
import { provideNzIcons } from 'ng-zorro-antd/icon';
export const appConfig: ApplicationConfig = {
  providers: [
    // importProvidersFrom(Htt),
    provideHttpClient(withInterceptorsFromDi()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),

    // Setup NgRx
    provideStore({ router: routerReducer}),
    provideRouterStore(),
    provideEffects(),

    // Setup Ng-Zorro

    // Setup Application
    provideAuthStore(),
    {
      provide: HTTP_INTERCEPTORS,
      useValue: new ApiInterceptor(environment.baseUrl),
      multi: true
    }

  ],
};
