import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'si-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() owner = 'Default owner';

  @Output() closed = new EventEmitter<boolean>();

  constructor() {


    setInterval( () => {
      this.closed.emit(true);
    }, 1234);

  }


  ngOnInit() {
  }


}
