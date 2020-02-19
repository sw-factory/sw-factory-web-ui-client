import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation-pane',
  template: `
    <nav>
      <div class="item">
        <img width="45px" src="../assets/images/dashboard.svg" />
        <div>Dashboard</div>
      </div>
      <div class="item">
        <img width="45px" src="../assets/images/mywork.svg" />
        <div>My work</div>
      </div>
      <div class="item">
        <img width="45px" src="../assets/images/team.svg" />
        <div>Team</div>
      </div>
      <div class="item">
        <img width="45px" src="../assets/images/product.svg" />
        <div>Product</div>
      </div>
      <div class="item">
        <img height="45px" src="../assets/images/solution.svg" />
        <div>Solution</div>
      </div>
      <div class="item">
        <img width="45px" src="../assets/images/portfolio.svg" />
        <div>Portfolio</div>
      </div>
      <div class="item">
        <img height="45px" src="../assets/images/business.svg" />
        <div>Business</div>
      </div>
    </nav>
  `,
  styleUrls: ['./leftnavigationpane.component.scss']
})
export class LeftNavigationPaneComponent {}
