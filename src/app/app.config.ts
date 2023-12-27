import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { todoReducer } from './todo/reducers/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ todoes: todoReducer }),
    importProvidersFrom(HttpClientModule),
  ],
};
