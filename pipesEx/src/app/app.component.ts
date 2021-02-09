import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  msg1: string = 'Welcome';
  msg2: string = 'to';
  msg3: string = 'Angular11';

  var_one: string = "ashokit";
  var_two: string = "ANGULAR11";
  var_three: string = "ashok it";
  var_four: number = 100.12345;
  var_five: any = { key1: 'Hello_1', key2: 'Hello_2', key3: 'Hello_3' };
  var_six: Date = new Date();
  var_seven: number[] = [10, 20, 30, 40, 50];
  var_eight: number = 100;

  var_ten: any;

  constructor() {
    this.var_ten = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello');
      }, 5000);
    });
  }

  my_var: string = 'Hello';
}
