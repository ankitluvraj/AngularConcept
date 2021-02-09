import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'laptop',
  templateUrl: './camera.component.html',
  styles: [],
})
export class CameraComponent implements OnInit {
  var_two:any;
  constructor() {
    this.var_two = "camera coming soon.......";
  }

  ngOnInit(): void {}
}
