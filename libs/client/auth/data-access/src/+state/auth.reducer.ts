import { TokenStatusEnum } from "@just-a-system/util-types";
import { Action, createReducer, on } from "@ngrx/store";
import { RefreshTokenActions, LoginActions, LogoutActions, AuthUserActions } from "./auth.action";
import { AuthState } from "@just-a-system/client-util-types";

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthPartialState {
    readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
    isLoggedIn: false,
    user: undefined,
    accessTokenStatus: TokenStatusEnum.PENDING,
    refreshTokenStatus: TokenStatusEnum.PENDING,
    isLoadingLogin: false,
    hasLoginError: false
}

const reducer = createReducer(
    initialState,

    //login
    on(LoginActions.request,
        (state): AuthState => ({
            ...state,
            accessTokenStatus: TokenStatusEnum.VALIDATING,
            isLoadingLogin: true,
            hasLoginError: false
        })
    ),

    //refresh token 
    on(RefreshTokenActions.request,
        (state): AuthState => ({
            ...state,
            refreshTokenStatus: TokenStatusEnum.VALIDATING
        })
    ),

    //login & refresh token
    on(LoginActions.success, RefreshTokenActions.request,
        (state): AuthState => ({
            ...state,
            isLoggedIn: true,
            isLoadingLogin: false,
            accessTokenStatus: TokenStatusEnum.VALID,
            refreshTokenStatus: TokenStatusEnum.VALID
        })
    ),
    on(LoginActions.failure, RefreshTokenActions.falure,
        (state, action): AuthState => ({
            ...state,
            isLoadingLogin: false,
            accessTokenStatus: TokenStatusEnum.INVALID,
            refreshTokenStatus: TokenStatusEnum.INVALID
        })
    ),

    //logout
    on(LogoutActions,
        (): AuthState => ({
            ...initialState
        })
    ),

    // auth user
    on(
        AuthUserActions.success,
        (state, action): AuthState => ({
            ...state,
            user: action.user
        })
    ),
    on(AuthUserActions.failure,
        (): AuthState => ({
            ...initialState
        })
    )
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
    return reducer(state, action)
}