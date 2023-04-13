import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private urlBack: string = environment.urlBack;

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDIxMTBmNWRmMDg2YjlmM2ZmOGJmYzYiLCJpYXQiOjE2ODAwNTM4NDgsImV4cCI6MTY4MDA3NTQ0OH0.IzbKE8WAq1ijAyqvPbxKPTfhl6g7q27v6CNmftOyJV8';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(`${this.urlBack}/api/usuarios`).pipe(
      map((resp) => resp.usuarios),
      catchError((err) => of(err.error.Message))
    );
  }

  getIngresos() {
    return this.http.get<any>(`${this.urlBack}/api/ingresos/UltimaSemana`)
  }

  getIngresosByNickname(nickname: string) {
    return this.http.get<any>(`${this.urlBack}/api/usuarios/${nickname}`);
  }

  getUserByNickname(nickname: string) {
    return this.http.get<any>(`${this.urlBack}/api/usuarios/${nickname}`);
  }

  updateUser(nickname: string, estado: boolean) {
    const headers = new HttpHeaders()
    .set('x-token' , localStorage.getItem('token')!);
    return this.http.put<any>(`${this.urlBack}/api/usuarios/${nickname}`, { estado }, { headers });
  }

  addUser(form: any) {
    const headers = new HttpHeaders()
    .set('x-token' , localStorage.getItem('token')!);
    return this.http.post<any>(`${this.urlBack}/api/usuarios`, form, { headers });
  }

  bigChart() {
    return [
      {
        name: 'Bad Bunny',
        data: [5, 10, 20, 15, 45, 14, 52],
      },
      {
        name: 'Peter Parker',
        data: [20, 10, 21, 2, 13, 16, 29],
      },
      {
        name: 'Doja Cat',
        data: [2, 2, 2, 6, 13, 30, 46],
      },
    ];
  }

  bigChartFede(): any[] {
    return [
      {
        name: 'Bad Bunny',
        data: [20, 10, 21, 2, 13, 16, 29],
      },
    ];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [
      {
        name: 'Bad Bunny',
        y: 70,
        sliced: true,
        selected: true,
      },
      {
        name: 'Peter Parker',
        y: 20,
      },
      {
        name: 'Doja Cat',
        y: 10,
      },
    ];
  }
}
