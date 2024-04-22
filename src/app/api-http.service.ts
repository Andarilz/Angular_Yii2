import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from "./Interfaces/Book";
import {Author} from "./Interfaces/Author";

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
   return this.http.get<Book[]>('http://localhost:8080/books');
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:8080/books/${id}`);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('http://localhost:8080/authors');
  }

  getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(`http://localhost:8080/authors/${id}`);
  }

  createAuthor(author: Author): Observable<any>{
    return this.http.post('http://localhost:8080/authors', author);
  }

  createBook(book: Book): Observable<any>{
    return this.http.post('http://localhost:8080/books', book);
  }

  updateAuthor(author: Author): Observable<any>{
    return this.http.put(`http://localhost:8080/authors/${author.id}`, author);
  }

  updateBook(book: Book): Observable<any>{
    return this.http.put(`http://localhost:8080/books/${book.id}`, book);
  }
}
