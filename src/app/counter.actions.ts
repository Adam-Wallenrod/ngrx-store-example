import {Action} from '@ngrx/store';


export enum ActionTypes {
  IncrementHome = '[Scoreboard Page] Home Score',
  IncrementAway = '[Scoreboard Page] Away Score',
  Reset         = '[Scoreboard Page] Reset Score',
}

export class IncrementHome implements Action {
  readonly type = ActionTypes.IncrementHome;
}

export class IncrementAway implements Action {
  readonly type = ActionTypes.IncrementAway;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;

  constructor (public payLoad: {home: number; away: number}) {}

}


export type ActionsUnion = IncrementHome | IncrementAway | Reset;
