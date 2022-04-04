import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-config-changed',
  templateUrl: './config-changed.component.html',
  styleUrls: ['./config-changed.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigChangedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
