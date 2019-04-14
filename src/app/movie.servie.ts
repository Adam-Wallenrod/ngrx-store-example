import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


interface IFilm {
  results: Object[];
}


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    console.log('moviesService.getAll() is working!');
    const films = this.http.get('https://swapi.co/api/films/');
    return films;
  }


  getShips() {
    const ships = this.http.get('https://swapi.co/api/starships');
    return ships;
  }
}
