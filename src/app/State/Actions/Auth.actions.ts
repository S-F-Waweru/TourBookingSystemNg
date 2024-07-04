import { createActionGroup, props } from "@ngrx/store";
import { Adduser, LoginReq, LoginResponse, RegisterResponse, User } from "../../Models/AddUser";

export const AuthActions = createActionGroup({
    source: 'AUTH API',
    events: {
        // lOG IN
        'login': props<{ user: LoginReq }>(),
        'login success': props<{ response: LoginResponse }>(),
        'login failure': props<{ message: string }>(),

        // Register 
        'register': props<{user: Adduser}>(),
        'register success': props<{response: RegisterResponse}>(),
        'register failure': props<{message: string}>(),
    }
})