import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg-info">Info</div>
    <button [class.bg-danger]="bgButton" (click)="changeColor()">
      Change bg color
    </button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bgButton = true;
  info = 'Hieu Minh';
  changeColor() {
    this.bgButton = !this.bgButton;
  }
}
