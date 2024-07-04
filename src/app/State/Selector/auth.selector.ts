import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthInterface } from "../Reducers/auth.reducers";
import { state } from "@angular/animations";


const authSelectorFeature = createFeatureSelector<AuthInterface>('auth')

export const erorrLoginSelector = createSelector(
    authSelectorFeature,
    (state) => state.loginErrorMessage
)

export const errorRegisterSelector = createSelector(
    authSelectorFeature,
    (state)=> state.registerErrorMessage
)