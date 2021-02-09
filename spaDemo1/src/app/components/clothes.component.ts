import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'laptop',
  templateUrl: './clothes.component.html',
  styles: [],
})
export class ClothesComponent implements OnInit {
  var_three:any;
  constructor() {
    this.var_three = "cloths coming soon...........";
  }

  ngOnInit(): void {}
}
