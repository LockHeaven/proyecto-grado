import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScreensComponent } from './screens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DinamicPasswordComponent } from './dinamic-password/dinamic-password.component';
import { TemporalPasswordComponent } from './temporal-password/temporal-password.component';


const routes:Routes=[
  {path:'dashboard', component:ScreensComponent,
  children:[
    {path: '', component: DashboardComponent, data: {titulo:'Dashboard'}}, 
    {path: 'users', component: UsersComponent, data: {titulo:'Usuarios'}},
    {path: 'users/:id', component: UserDetailComponent},
    {path: 'dinamic-password', component: DinamicPasswordComponent, data: {titulo:'Usuarios'}},
    {path: 'temporal-password', component: TemporalPasswordComponent, data: {titulo:'Usuarios'}},
  ]
}
]


@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ScreensRoutingModule { }
