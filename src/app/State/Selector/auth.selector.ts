import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthInterface } from "../Reducers/auth.reducers";


const authSelectorFeature = createFeatureSelector<AuthInterface>('auth')

export const erorrSelectoer = createSelector(
    authSelectorFeature,
    (state) => state.loginErrorMessage
)