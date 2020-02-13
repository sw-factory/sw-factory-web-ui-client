import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-left-navigation-pane></app-left-navigation-pane>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'swfactory-web-ui-client';
}
