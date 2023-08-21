import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../classes/user.classes';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = `${environment.baseUrl}`; 

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<{data:User}>(`${this.baseUrl}/users`);
  }

  login(payload:User){
    return this.http.post(`${this.baseUrl}/users/logIn`,payload);
  }
}
