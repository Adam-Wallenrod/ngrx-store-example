import {Movie} from './movie.actions';

export interface MovieState {
  allMovies: Movie[];
}


export const initialState: MovieState = {
  allMovies: []
};

