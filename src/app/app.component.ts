import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <header-view>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "swfactory-web-ui-client";
}
