import { Action } from '@ngrx/store';

export interface Book {
  id?: number;
  userId?: string;
  name?: string;
}

export interface User {
  id?: number;
  name?: string;
}

export const SET_BOOK = '[Book] Set Book';

export class SetBookAction implements Action {
  readonly type = SET_BOOK;

  constructor(public user: User) {}
}

export type actions = SetBookAction;
