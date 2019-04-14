import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-my-observable',
  templateUrl: './my-observable.component.html',
  styleUrls: ['./my-observable.component.css']
})
export class MyObservableComponent implements OnInit {

  @ViewChild('button') buttonElm;
  clicks: Observable<MouseEvent>;


  constructor() {
  }

  ngOnInit() {
    console.log('button is: ', this.buttonElm);

    this.clicks = fromEvent(this.buttonElm.nativeElement, 'click');


    const observer = this.clicks.subscribe((event: MouseEvent) => {
      console.log('Button was clicked, clientX co-ordinate:  ', event.clientX);
    });
  }

}
