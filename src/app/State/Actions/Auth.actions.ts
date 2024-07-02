import { createActionGroup, props } from "@ngrx/store";
import { LoginReq, LoginResponse } from "../../Models/AddUser";

export const AuthActions = createActionGroup({
    source: 'AUTH API',
    events: {
        // lOG IN
        'login': props<{ user: LoginReq }>(),
        'login success': props<{ response: LoginResponse }>(),
        'login failure': props<{ message: string }>()
    }
})