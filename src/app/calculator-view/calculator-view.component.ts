import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.css']
})
export class CalculatorViewComponent implements OnInit {

  constructor() {
    /*const time: Date (); // for now
    time.getHours(); // => 9
    time.getMinutes(); // =>  30
    time.getSeconds(); // => 51*/
   }

  ngOnInit() {
  }

}
