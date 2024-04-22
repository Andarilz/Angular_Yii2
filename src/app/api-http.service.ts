import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from "./Interfaces/Book";

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
   return this.http.get<Book[]>('http://localhost:8080/books');
  }
}
