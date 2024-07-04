import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { authReducer } from './State/Reducers/auth.reducers';
import { AuthEffects } from './State/Effects/auth.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { tourReducer } from './State/Reducers/tours.reducers';
import { ToursEffect } from './State/Effects/tour.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(withInterceptors([TokenInterceptor])),
    provideStore({ auth: authReducer , tours : tourReducer}),
    provideEffects([AuthEffects, ToursEffect]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })],
};
