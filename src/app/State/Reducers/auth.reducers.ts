import { createReducer, on } from "@ngrx/store"
import { AuthActions } from "../Actions/Auth.actions"

export interface AuthInterface{
    loginSuccessMessage:string,
    loginErrorMessage :string
    loginLoading : boolean
}

const initialState:AuthInterface ={
    loginSuccessMessage:'',
    loginErrorMessage :'',
    loginLoading : false
}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state) =>{
        return {
            ...state,
            loginSuccessMessage:'',
            loginErrorMessage :'',
            loginLoading : true
        }
    }),

    on(AuthActions.loginSuccess, (state, action) =>{
        return {
            ...state,
            loginSuccessMessage:action.response.message,
            loginErrorMessage : '',
            loginLoading : false
        }
    }),

    on(AuthActions.loginFailure, (state,action) =>{
        return {
            ...state,
            loginSuccessMessage:'',
            loginErrorMessage :action.message,
            loginLoading : true
        }
    })
)