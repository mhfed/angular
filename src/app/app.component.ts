import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public fruits = [
    { name: 'Banana', price: 300, sale: 100 },
    { name: 'Strawberry', price: 500, sale: 0 },
    { name: 'Apple', price: 100, sale: 0 },
    { name: 'Oranges', price: 200, sale: 400 },
  ];
  ngOnInit(): void {
    console.log('Fruits', this.fruits);
  }
}
