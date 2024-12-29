import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginResponse } from '../dto/login.response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'currentUser';
  private apiUrl = 'http://localhost:8005/auth';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: { email: string, password: string }): Observable<LoginResponse> {
    console.log('Login with email: ', credentials.email, ' and password: ', credentials.password);
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}