import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-messages',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
