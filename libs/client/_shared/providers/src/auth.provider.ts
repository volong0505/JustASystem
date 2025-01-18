import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@just-a-system/client-shared-interceptors';
import { Provider } from '@angular/core';

export const authInterceptorProviders: Provider[] = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
]