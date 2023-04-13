import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlLogin: string = environment.urlBack;
  private user: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private _usuario;

  get usuario() {
    return this._usuario;
  }

  constructor(private http: HttpClient) {}

  validarToken(): Observable<boolean> {
    const url = `${this.urlLogin}/api/auth/validarToken`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.get(url, { headers }).pipe(
      map((resp) => {
        this._usuario = resp || '';
        return true;
      }),
      catchError((err) => of(false))
    );
  }

  login(nickname: string, password: string) {
    const url = `${this.urlLogin}/api/auth/login`;

    const body = {
      nickname: nickname,
      clave: password,
    };

    return this.http.post<any>(url, body).pipe(
      tap((resp) => {
        if (resp.token) {
          localStorage.setItem('token', resp.token);
        }
      }),
      map((resp) => true),
      catchError((err) => of(err.error.msg))
    );
  }

  logout() {
    localStorage.clear();
  }
}
