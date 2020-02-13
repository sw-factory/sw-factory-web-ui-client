import { Component } from "@angular/core";

@Component({
  selector: "header-view",
  template: `
    <header class="header">
      <img height="100%" src="../assets/images/sw_factory_logo.png" />
    </header>

    <style>
      header {
        background-color: var(--primary-brand-color);
        padding-bottom: 2px;
        padding-left: 7px;
        padding-top: 8px;
      }
    </style>
  `
})
export class HeaderViewComponent {}
