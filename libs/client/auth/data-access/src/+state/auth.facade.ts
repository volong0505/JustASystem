import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import *  as AuthSelector from './auth.selectors';
import { AuthUserActions, LoginActions, LogoutActions } from "./auth.action";

@Injectable({providedIn: 'root'})
export class AuthFacade {
    private readonly store = inject(Store);

    readonly authUser$ = this.store.select(AuthSelector.selectAuthUser);
    readonly isLoggedIn$ = this.store.select(AuthSelector.selectIsLoggedIn);
    readonly isLoadingLogin$ = this.store.select(AuthSelector.selectIsLoadingLogin);
    readonly hasLoginError$ = this.store.select(AuthSelector.selectLoginError);

    login(username: string, password: string) {
        this.store.dispatch(LoginActions.request({username, password}))
    }

    logout() {
        this.store.dispatch(LogoutActions())
    }

    getAuthUser() {
        this.store.dispatch(AuthUserActions.request())
    }
}