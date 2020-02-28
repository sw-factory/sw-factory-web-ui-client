import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation-pane',
  template: `
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">
        <div class="item">
          <img width="45px" src="../assets/images/dashboard.svg" />
          <div>Dashboard</div>
        </div>
      </a>
      <a routerLink="/mywork" routerLinkActive="active">
        <div class="item">
          <img width="45px" src="../assets/images/mywork.svg" />
          <div>My work</div>
        </div>
      </a>
      <a routerLink="/team" routerLinkActive="active">
        <div class="item">
          <img width="45px" src="../assets/images/team.svg" />
          <div>Team</div>
        </div>
      </a>
      <a routerLink="/product" routerLinkActive="active">
        <div class="item">
          <img width="45px" src="../assets/images/product.svg" />
          <div>Product</div>
        </div>
      </a>
      <a routerLink="/solution" routerLinkActive="active">
        <div class="item">
          <img height="45px" src="../assets/images/solution.svg" />
          <div>Solution</div>
        </div>
      </a>
      <a routerLink="/portfolio" routerLinkActive="active">
        <div class="item">
          <img width="45px" src="../assets/images/portfolio.svg" />
          <div>Portfolio</div>
        </div>
      </a>
      <a routerLink="/business" routerLinkActive="active">
        <div class="item">
          <img height="45px" src="../assets/images/business.svg" />
          <div>Business</div>
        </div>
      </a>
    </nav>
  `,
  styleUrls: ['./leftnavigationpane.component.scss']
})
export class LeftNavigationPaneComponent {}
