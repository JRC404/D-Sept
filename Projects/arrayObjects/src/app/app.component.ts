import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayOfObjects = [
    { Item: "Apple", Quantity: 0 },
    { Item: "Banana", Quantity: 0 },
    { Item: "Orange", Quantity: 0 },
  ];
}
