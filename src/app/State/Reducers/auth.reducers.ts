import { createReducer, on } from "@ngrx/store"
import { AuthActions } from "../Actions/Auth.actions"

export interface AuthInterface {
    loginSuccessMessage: string,
    loginErrorMessage: string
    loginLoading: boolean

    registerSuccessMessage: string,
    registerErrorMessage: string
    registerLoading: boolean
}

const initialState: AuthInterface = {
    loginSuccessMessage: '',
    loginErrorMessage: '',
    loginLoading: false,

    registerSuccessMessage: '',
    registerErrorMessage: '',
    registerLoading: true


}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state) => {
        return {
            ...state,
            loginSuccessMessage: '',
            loginErrorMessage: '',
            loginLoading: true
        }
    }),

    on(AuthActions.loginSuccess, (state, action) => {
        return {
            ...state,
            loginSuccessMessage: action.response.message,
            loginErrorMessage: '',
            loginLoading: false
        }
    }),

    on(AuthActions.loginFailure, (state, action) => {
        return {
            ...state,
            loginSuccessMessage: '',
            loginErrorMessage: action.message,
            loginLoading: false
        }
    }),

    // Register

    on(AuthActions.register, (state) => {
        return {
            ...state,
            registerSuccessMessage: '',
            registerErrorMessage: '',
            registerLoading: true
        }
    }),
    on(AuthActions.registerSuccess, (state, action) => {
        return {
            ...state,
            registerSuccessMessage: action.response.message,
            registerErrorMessage: '',
            registerLoading: true
        }
    }),
    on(AuthActions.registerFailure, (state, action) => {
        return {
            ...state,
            registerSuccessMessage: '',
            registerErrorMessage: action.message,
            registerLoading: true
        }
    }),
)