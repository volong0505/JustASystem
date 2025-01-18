import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthUser } from '@just-a-system/util-types';
import { AuthActionEnum } from '@just-a-system/client-util-types';
// login
export const LoginActions = createActionGroup({
    source: AuthActionEnum.LOGIN,
    events: {
        request: props<{username: string, password: string}>(),
        success: emptyProps(),
        failure: props<{ error: Error}>()
    }
});

// logout
export const LogoutActions = createAction(AuthActionEnum.LOGOUT,);

// Auth User: me 
export const AuthUserActions = createActionGroup ({
    source: AuthActionEnum.USER,
    events: {
        request: emptyProps(),
        success: props<{user: AuthUser}>(),
        failure: emptyProps()
    }
});

export const RefreshTokenActions = createActionGroup({
    source: AuthActionEnum.REFRESH_TOKEN,
    events: {
        request: emptyProps(),
        success: emptyProps(),
        falure: emptyProps(),
    }
})