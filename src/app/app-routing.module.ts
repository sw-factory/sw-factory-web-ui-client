import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from 'src/pages/dashboardpage/view/dashboardpage.component';
import { MyWorkPageComponent } from 'src/pages/myworkpage/view/myworkpage.component';
import { TeamPageComponent } from 'src/pages/teampage/view/teampage.component';
import { ProductPageComponent } from 'src/pages/productpage/view/productpage.component';
import { PortfolioPageComponent } from 'src/pages/portfoliopage/view/portfoliopage.component';
import { BusinessPageComponent } from 'src/pages/businesspage/view/businesspage.component';
import { SolutionPageComponent } from 'src/pages/solutionpage/view/solutionpage.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'mywork', component: MyWorkPageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'solution', component: SolutionPageComponent },
  { path: 'business', component: BusinessPageComponent },
  { path: '', redirectTo: '/mywork', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
