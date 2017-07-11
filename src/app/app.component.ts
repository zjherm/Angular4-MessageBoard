import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';

@Component({
  selector: 'my-app',
  template: `
  	<nav></nav>
  	<router-outlet></router-outlet>
  `,
})
export class AppComponent  {}
