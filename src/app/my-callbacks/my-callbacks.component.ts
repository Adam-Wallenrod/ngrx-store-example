import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-my-callbacks',
  templateUrl: './my-callbacks.component.html',
  styleUrls: ['./my-callbacks.component.css']
})
export class MyCallbacksComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
    const userName = 'Ala';

    const handleUser = user => {
      console.log(user.name);
    };


    const getUser = (cb, name) => {  // cb is a callback function, FUNCTION !!! remember
      setTimeout(() => {
        cb({name: name});
      }, 5000);
    };

    // first way of calling function
    getUser((user => {
      console.log(user.name);
    }), userName);


    // second way of calling function
    getUser(handleUser, 'Fifek');

    console.log('This text shows BEFORE names are printed!');
  }




}
