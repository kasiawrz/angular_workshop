import { Component } from '@angular/core';

@Component({
  selector: 'si-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ':)dsaa ';

  constructor() {
    setInterval(() => {
      this.title = this.title + '.'
      }
    , 2000);
  }

  handleClick(event: MouseEvent) {
    this.title = event.clientX.toString();
  }

  handleClosed(isClosed: boolean) {
    console.log(isClosed);
  }
}
