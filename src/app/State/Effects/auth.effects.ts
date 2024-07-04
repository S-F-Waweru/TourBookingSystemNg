import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { AuthActions } from "../Actions/Auth.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthServiceService } from "../../Services/auth-service.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions,
        private router: Router,
        private auth: AuthServiceService) { }

    loginUser$ = createEffect(() => {
        return this.action$.pipe(
            ofType(AuthActions.login),
            exhaustMap(({ user }) => this.auth.loginUser(user).pipe(
                map(res => {
                    
                    // set token to local storage
                    localStorage.setItem('token', res.token)
                    localStorage.setItem('role', res.role)
                    localStorage.setItem('userId', res.userId)

                     // Navigate to tours
                    if (res.token) {
                        this.router.navigate(['tours'])
                    }

                    return AuthActions.loginSuccess({ response: res })

                }),
                // If there is an error rerutn the errort
                catchError(error => of(AuthActions.
                    loginFailure({ message: error.error.message })))
            ))

        )
    })


    registerUser$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(AuthActions.register),
            exhaustMap(({user}) => this.auth.registerUser(user).pipe(
                map(res =>{
                    this.router.navigate(['login'])
                     return AuthActions.registerSuccess({response:res})
                }),
                catchError(error => of(AuthActions.
                            registerFailure({message: error.error.message})
                ))
            ))
        )
    })
}