import {User, Book} from './book.actions';
import {createSelector} from '@ngrx/store';
import {Movie} from './movie.actions';

import * as  fromBook from './book.actions';
import * as movies from './movie.actions';


export interface BookState {
  selectedUser?: User;
  allBooks?: Book[];
  allMovies?: Movie[];
}


const listBooks: fromBook.Book[] = [
        {
          id    : 1,
          userId: 1,
          name  : 'War and Peace'
        },
        {
          id    : 2,
          userId: 1,
          name  : 'Song of Solomon'
        },
        {
          id    : 3,
          userId: 2,
          name  : 'Ulysses'
        },
        {
          id    : 4,
          userId: 2,
          name  : 'The Shadow of the Wind'
        },
        {
          id    : 5,
          userId: 3,
          name  :
            'The Lord of the Rings'
        }
      ];

const initialBookState: BookState = {
  selectedUser: null,
  allBooks    : listBooks,
  allMovies: []
};


export function bookReducer( state = initialBookState, action: fromBook.actions ): BookState {
  switch (action.type) {
    case fromBook.SET_BOOK:
      console.log('fromBook.SET_BOOK');
      return {
        selectedUser: {... action['user']},
        allBooks: listBooks,
        allMovies: state.allMovies
      };

    case movies.LOAD: {
      console.log('LOAD is working');
      return state;
    }

    case movies.LOAD_SUCCESS: {
      const result = action['payload']['results'];
      console.log('LOAD_SUCCESS is working');
      return Object.assign( {}, {allMovies: result, allBooks: state.allBooks} );
    }


    default:
      return state;
  }
}



export const selectUser = (state: any) => state.books.selectedUser;
export const selectAllBooks = (state: any) => state.books.allBooks;
export const selectAllMovies = (state: any) => state.books.allMovies;

export const selectVisibleBooks = (r) => createSelector(
  selectUser,
  selectAllBooks,
  (selectedUser: User, allBooks: Book[]) => {
    if (selectedUser && allBooks) {
      return allBooks.filter((book: Book) => book.userId === selectedUser.id);
    } else {
      return allBooks;
    }
  }
);


export const selectMovies =  () => createSelector(
  selectAllMovies,
  (allMovies: Movie[]) => {
    return allMovies;
  }
);

