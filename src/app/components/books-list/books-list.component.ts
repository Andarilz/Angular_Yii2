
import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../../Interfaces/Book";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {

  //конструктор с dependency injection
  constructor(private router: Router) {
  }

  //Данные для таблицы книг
  books: Book[] = [
    { id: 1, title: 'Book 1', author: {id: 1, name: "Test", country: 'bl', birth_year: 2014}, language: 'English', pages: 200, description: 'Description 1', genre: 'comedy' },
    { id: 2, title: 'Book 2', author: {id: 1, name: "Test", country: 'bl', birth_year: 2014}, language: 'Spanish', pages: 250, description: 'Description 2', genre: 'detective' },
    { id: 3, title: 'Book 3', author: {id: 1, name: "Test", country: 'bl', birth_year: 2014}, language: 'French',  pages: 180, description: 'Description 3', genre: 'dramatic' }
  ];


  displayedColumns: string[] = ['title', 'author', 'language', 'pages', 'description', 'genre'];

  redirectToBookDetail(bookId: string) {
    this.router.navigate(['/book', bookId]);
  }

}

