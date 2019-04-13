import {Action} from '@ngrx/store';
import {LoadAction, LoadSuccessAction} from './movie.actions';

export interface Book {
  id?: number;
  userId?: number;
  name?: string;
}

export interface User {
  id?: number;
  name?: string;
}

export const SET_BOOK = '[Book] Set Book';
export const RESET_BOOK = '[Book] Rest Book';

export class SetBookAction implements Action {
  readonly type = SET_BOOK;

  constructor(public user: User) {
  }
}

export class ResetBookAction implements Action {
  readonly type = RESET_BOOK;

  constructor(public user: User) {
  }
}


export type actions = SetBookAction | ResetBookAction | LoadAction | LoadSuccessAction;
