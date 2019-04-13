import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {BookState, selectMovies, selectVisibleBooks} from './book.reducer';
import {Book, ResetBookAction} from './book.actions';
import * as fromBook from './book.actions';
import * as fromMovie from './movie.actions';
import {Movie} from './movie.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  libraryBooks: Book[] = [];
  selectedUserId: number;
  starWarsMovies: Movie[];


  constructor(private store: Store<BookState>) {

  }


  ngOnInit() {
    const bookState: BookState = {
      selectedUser: null,
      allBooks: null,
      allMovies: null
    };

    this.store.pipe(select(selectVisibleBooks(bookState)))
      .subscribe(result => {
        console.log('selectVisibleBooks: ', result);
        this.libraryBooks = result;
      });


    this.store.pipe(select(selectMovies()))
      .subscribe(result => {
        console.log('selectAllMovies: ', result);
        this.starWarsMovies = result;
      });


  }


  searchForBooks(userId: number): void {
    const user: fromBook.User = {
      id: userId
    };

    this.store.dispatch(new fromBook.SetBookAction(user));
    console.log('selectedUser: ', this.selectedUserId);
  }


  showAllBooks(): void {
    const user: fromBook.User = {
      id: null
    };

    this.selectedUserId = null;
    this.store.dispatch(new fromBook.ResetBookAction(user));
    console.log('show all books is working ');
  }


  getMovies(): void {
    this.selectedUserId = null;
    console.log('dispatching LoadAction!');
    this.store.dispatch(new fromMovie.LoadAction);

  }

}
