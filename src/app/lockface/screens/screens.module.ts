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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersFormComponent } from './users/users-form/users-form.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    UsersComponent, 
    ScreensComponent, 
    UserDetailComponent, 
    DinamicPasswordComponent, 
    TemporalPasswordComponent, UsersFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ScreensModule { }
