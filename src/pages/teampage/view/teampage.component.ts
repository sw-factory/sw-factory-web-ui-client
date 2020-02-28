import { Component } from '@angular/core';

@Component({
  selector: 'app-team-page',
  template: `
    <mat-tab-group>
      <mat-tab label="TEAM BOARD">
        <div class="swimLanes">
          <div class="swimLane">
            <h4>TO DO</h4>
            <mat-card></mat-card>
          </div>
          <div class="swimLane">
            <h4>IN PROGRESS</h4>
            <mat-card></mat-card>
          </div>
          <div class="swimLane">
            <h4>READY FOR REVIEW</h4>
            <mat-card></mat-card>
          </div>
        </div>
      </mat-tab>
      <mat-tab label="TEAM BACKLOG"> Content 2 </mat-tab>
      <mat-tab label="TEAM TASKS"> Content 3 </mat-tab>
      <mat-tab label="IMPEDIMENTS"> Content 3 </mat-tab>
      <mat-tab label="RISKS"> Content 3 </mat-tab>
      <mat-tab label="STATISTICS"> Content 3 </mat-tab>
    </mat-tab-group>
  `,
  styleUrls: ['./teampage.component.scss']
})
export class TeamPageComponent {}
