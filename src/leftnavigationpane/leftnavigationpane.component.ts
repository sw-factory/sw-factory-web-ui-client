import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation-pane',
  template: `
    <nav>
      <img width="45px" src="../assets/images/dashboard.svg" />
      <img width="45px" src="../assets/images/mywork.svg" />
      <img width="45px" src="../assets/images/team.svg" />
      <img width="45px" src="../assets/images/product.svg" />
      <img height="45px" src="../assets/images/solution.svg" />
      <img width="45px" src="../assets/images/portfolio.svg" />
      <img height="45px" src="../assets/images/business.svg" />
    </nav>

    <style>
      nav {
        background-color: var(--secondary-brand-color);
        height: 100vh;
        width: 50px;
      }
    </style>
  `
})
export class LeftNavigationPaneComponent {}
