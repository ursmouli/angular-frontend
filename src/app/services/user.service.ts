import { Injectable } from '@angular/core';
import { UserRegistration } from '../dto/user-registration';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8005/auth';

  constructor(private http: HttpClient, private router: Router) { }

  
}
