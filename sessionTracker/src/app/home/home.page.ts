import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: 'Session Tracker';
  // input variables
  name: string;
  workTitle: string;
  hoursNeeded: number;

  constructor() {}

}
