import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, inject, Injectable, Provider } from "@angular/core";
import { TokenStatusEnum } from '@just-a-system/util-types';
import { Store } from "@ngrx/store";
import { filter, lastValueFrom, Observable, take } from "rxjs";
import { RefreshTokenActions } from "./+state/auth.action";
import * as AuthSelectors from './+state/auth.selectors';
import { AuthState } from '@just-a-system/client-util-types';
import { AUTH_LOGIN_API } from '@just-a-system/util-constants';

export interface AuthAccessData {
    token_type: 'Bearer';
    expires_in: number;
    access_token: string;
    refresh_token: string;
};

@Injectable({ providedIn: 'root'})
export class AuthService {

    private readonly store = inject(Store);
    private readonly http = inject(HttpClient);


    init(): Promise<AuthState> {
        this.store.dispatch(RefreshTokenActions.request());

        const authState$ = this.store.select(AuthSelectors.selectAuth).pipe(
            filter(
                auth =>
                    auth.refreshTokenStatus === TokenStatusEnum.INVALID || 
                    (auth.refreshTokenStatus == TokenStatusEnum.VALID && !!auth.user)
            ),
            take(1)
        );

        return lastValueFrom(authState$)
    }

    login(username: string, password: string): Observable<AuthAccessData> {
        return this.http.post<AuthAccessData>(AUTH_LOGIN_API, {
            grant_type: 'password',
            username, password
        })
    }
}

export const authServiceInitProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: (authService: AuthService) => () => authService.init(),
    deps: [AuthService],
    multi: true
}