import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <img height="100%" src="../assets/images/sw_factory_logo.png" />
      <mat-select [(value)]="selectedOrganization" (selectionChange)="onSelectionChange()">
        <mat-option class="organizations" *ngFor="let organization of organizations" [value]="organization">
          <span class="organization-path">{{
            organization
              .split(',')
              .slice(0, -1)
              .join(',')
              .trim() + ','
          }}</span>
          <span class="organization">{{ organization.split(',').slice(-1)[0] }}</span>
        </mat-option>
      </mat-select>
      <mat-icon class="add" aria-hidden="false" aria-label="Example home icon">add_circle_outline</mat-icon>
      <div class="account">
        <mat-icon class="add" aria-hidden="false" aria-label="Example home icon">account_box</mat-icon>
        <span>Petri</span>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewChecked {
  organizations = [
    'Nokia Software, Insights, Network Insights, CA4MN, Plan-B',
    'Nokia Software, Insights, Network Insights, CA4MN, T-Rex'
  ];

  selectedOrganization = this.organizations[0];

  ngAfterViewChecked() {
    this.updateSelectedOrganizationSpanElement();
  }

  onSelectionChange() {
    this.updateSelectedOrganizationSpanElement();
  }

  private updateSelectedOrganizationSpanElement() {
    const selectedOrganizationSpanElement = document.querySelector('header .mat-select-value-text span');
    if (selectedOrganizationSpanElement) {
      console.log(this.selectedOrganization);
      selectedOrganizationSpanElement.innerHTML = `
        <span class="organization-path">
          ${this.selectedOrganization
            .split(',')
            .slice(0, -1)
            .join(',')
            .trim() + ','}
        </span>
        <span class="organization">${this.selectedOrganization.split(',').slice(-1)[0]}</span>
      `;
    }
  }
}
