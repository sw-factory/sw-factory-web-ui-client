import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/view/header.component';
import { LeftNavigationPaneComponent } from 'src/leftnavigationpane/view/leftnavigationpane.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { DashboardPageComponent } from 'src/pages/dashboardpage/view/dashboardpage.component';
import { MyWorkPageComponent } from 'src/pages/myworkpage/view/myworkpage.component';
import { TeamPageComponent } from 'src/pages/teampage/view/teampage.component';
import { ProductPageComponent } from 'src/pages/productpage/view/productpage.component';
import { PortfolioPageComponent } from 'src/pages/portfoliopage/view/portfoliopage.component';
import { BusinessPageComponent } from 'src/pages/businesspage/view/businesspage.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SolutionPageComponent } from 'src/pages/solutionpage/view/solutionpage.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavigationPaneComponent,
    DashboardPageComponent,
    MyWorkPageComponent,
    TeamPageComponent,
    ProductPageComponent,
    SolutionPageComponent,
    PortfolioPageComponent,
    BusinessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
