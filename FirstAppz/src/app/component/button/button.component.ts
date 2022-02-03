 import { Component, OnInit, Output, EventEmitter} from '@angular/core';
//import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

// @Input() text: string;
// @Input() color: string;
@Output () btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick ()
  {
    // console.log('add');
    this.btnClick.emit();
  }

}
