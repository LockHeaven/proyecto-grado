import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ScreensComponent } from './screens.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DinamicPasswordComponent } from './dinamic-password/dinamic-password.component';
import { TemporalPasswordComponent } from './temporal-password/temporal-password.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    UsersComponent, 
    ScreensComponent, 
    UserDetailComponent, 
    DinamicPasswordComponent, 
    TemporalPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class ScreensModule { }
