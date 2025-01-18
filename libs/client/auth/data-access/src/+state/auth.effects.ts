import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AuthUserActions, LoginActions } from "./auth.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService } from "../auth.service";
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    private actions$ = inject(Actions);
    private authService = inject(AuthService);
    private router = inject(Router);
    private activatedRouter = inject(ActivatedRoute);
    
    readonly login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoginActions.request),
            exhaustMap(credentials => 
                this.authService.login(credentials.username, credentials.password).pipe(
                    map(data => {
                        return LoginActions.success();
                    }),
                    catchError(error => of(LoginActions.failure((error))))
                )
            )
        )
    });

    readonly loginSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoginActions.success),
            map(() => {
                // redirect to return url or home 
                this.router.navigateByUrl(
                    this.activatedRouter.snapshot.queryParams['returnUrl'] || '/',
                );
                return AuthUserActions.request();
            })
        )
    })
}