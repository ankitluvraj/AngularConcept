import { Component } from '@angular/core';

@Component({
  selector: 'ng-for',
 templateUrl: './app.component.html',

})
  
export class NgForExampleComponent {
  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
}
