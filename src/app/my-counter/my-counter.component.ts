import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {IncrementHome, IncrementAway, Reset} from "../counter.actions";

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  incrementHome() {
    this.store.dispatch(new IncrementHome());
  }

  incrementAway() {
    this.store.dispatch(new IncrementAway());
  }

  reset() {
    this.store.dispatch(new Reset({home: 0, away: 0}));
  }

}
