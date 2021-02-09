import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello world';
  empfirstName: String = 'Ankit';
  emplastName: String = 'kumer';

  a: number = 10;
  b: number = 20;

  //attribute binding

  cols: number = 3;
  bdr: number = 5;

  constructor() {}
  showData() {
    console.log('welcome to programming world');
  }
  alertmassage() {
    alert('hello');
  }

  data: string = 'ankit';
  data1: string = 'ashu';
}
