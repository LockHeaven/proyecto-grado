import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';
import { UsersFormComponent } from './users-form/users-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private dialog: MatDialog
  ) {}
  users$!: Observable<any[]>;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users$ = this.dashboardService.getUsers();
  }

  addUser(): void {
    this.dialog
      .open(UsersFormComponent, {
        disableClose: true
      })
      .afterClosed()
      .subscribe(() => {
        this.getUsers();
      });
  }
}
