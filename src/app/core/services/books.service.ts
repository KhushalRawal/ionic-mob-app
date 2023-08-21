import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Book } from '../classes/books.classes';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = `${environment.baseUrl}`; 

  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get<{data:Book}>(`${this.baseUrl}/books`);
  }
}
