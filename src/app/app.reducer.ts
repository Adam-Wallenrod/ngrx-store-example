import * as fromBook from './book.reducer';
import * as fromCounter from './counter.reducer';
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
  books: fromBook.BookState;
  count: fromCounter.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  books: fromBook.bookReducer,
  count: fromCounter.counterReducer
};

