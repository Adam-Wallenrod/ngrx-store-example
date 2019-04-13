import {Action} from '@ngrx/store';
import * as Scoreboard from './counter.actions';


export interface State {
  home: number;
  away: number;
}


export const initialState: State = {
  home: 0,
  away: 0
};



export function counterReducer ( state = initialState, action: Scoreboard.ActionsUnion ): State {
  switch (action.type) {
    case Scoreboard.ActionTypes.IncrementHome:
      return {
        ...state,
        home: state.home + 1
      };

    case Scoreboard.ActionTypes.IncrementAway:
      return {
        ...state,
        away: state.away + 1
      };

    case Scoreboard.ActionTypes.Reset:
      return action.payLoad;

    default:
      return state;
  }
}
