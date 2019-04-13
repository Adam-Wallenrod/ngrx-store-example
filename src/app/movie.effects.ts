import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {Movie} from './movie.actions';
import {MoviesService} from './movie.servie';


@Injectable()
export class MovieEffects {

  constructor(private actions$: Actions,
              private moviesService: MoviesService) {
  }

  @Effect({dispatch: true})
  loadMovies$ = this.actions$
    .pipe(
      ofType('[Movies] Load'),
      mergeMap(() => this.moviesService.getAll()
        .pipe(
          map((res: Movie[]) => ({type: '[Movies] Load success', payload: res})),
          catchError(() => EMPTY)
        ))
    );


}
