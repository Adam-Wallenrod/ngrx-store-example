import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../movie.servie';


@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  ships;

  constructor(private movieService: MoviesService) {
  }


  ngOnInit() {
    this.movieService.getShips().subscribe((response) => {
      this.ships = response['results'];



      for (let i = 0; i < 10; i++) {
        const idProperty = {id : i};
        this.ships[i] = {...this.ships[i], ... idProperty};
      }

      console.log('ships: ', this.ships);
    });
  }

}
