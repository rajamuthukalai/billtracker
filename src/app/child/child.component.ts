import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() fromParent: String;

  @Output() toParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.toParent.emit("raja");
  }

}
