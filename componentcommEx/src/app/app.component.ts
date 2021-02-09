import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page_one: String = "welcome to programming world....";
  
  var_one : string;
  var_two : number;

  constructor() {
    this.var_one = "var one";
    this.var_two = 112233;
  }
}
