import { provideState } from '@ngrx/store';
import { AUTH_FEATURE_KEY, authReducer } from './+state';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './+state/auth.effects';
import { authServiceInitProvider } from './auth.service';
// import { authInterceptorProviders } from '@just-a-system/client-shared-interceptors';

export * from './+state';
export * from './auth.service';

export function provideAuthStore() {
    return [
        provideState(AUTH_FEATURE_KEY, authReducer),
        provideEffects(AuthEffects),
        // authServiceInitProvider,
        // authInterceptorProviders,
    ]
}