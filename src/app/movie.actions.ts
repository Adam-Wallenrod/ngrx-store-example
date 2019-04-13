import {Action} from '@ngrx/store';



export interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: any[];
  starships: any[];
  vehicles: any[];
  characters: any[];
  planets: any[];
  url: string;
  created: string;
  edited: string;
}

export const LOAD         = '[Movies] Load';
export const LOAD_SUCCESS = '[Movies] Load success';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor ( public payload: Movie[] ) {}
}


