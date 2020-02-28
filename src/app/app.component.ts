import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="navAndContent">
      <app-left-navigation-pane></app-left-navigation-pane>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>

    <style>
      .navAndContent {
        display: flex;
      }

      .content {
        flex-grow: 1;
      }
    </style>
  `
})
export class AppComponent {
  title = 'swfactory-web-ui-client';
}
