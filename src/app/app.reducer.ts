import * as fromBook from './book.reducer';
import * as fromCounter from './counter.reducer';
// import * as fromAuth from './auth.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './index';


export interface AppState {
  books: fromBook.BookState;
  count: fromCounter.State;
  // auth: fromAuth.reducer;
  router: RouterReducerState<RouterStateUrl>;
}

export const appReducers: ActionReducerMap<AppState> = {
  books: fromBook.bookReducer,
  count: fromCounter.counterReducer,
  // auth: fromAuth.reducer,
  router: routerReducer

};

