import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'laptop',
  templateUrl: './laptop.component.html',
  styles: [],
})
export class LaptopComponent implements OnInit {
  var_one :any;
  constructor() {
    this.var_one = "laptop coming soon........";
  }

  ngOnInit(): void {}
}
