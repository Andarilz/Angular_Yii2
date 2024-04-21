
import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../../Interfaces/Book";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent {

  //конструктор с dependency injection
  constructor(private router: Router) {
  }

  //Данные для таблицы книг
  authors: Author[] = [
    { id: 1, name: 'Author 1', books: 'Книга1', country: 'English', borth_year: 1990 },
    { id: 1, name: 'Author 1', books: 'Книга2', country: 'English', borth_year: 1990 },
    { id: 1, name: 'Author 1', books: 'Книга3', country: 'English', borth_year: 1990 },
  ];


  displayedColumns: string[] = ['name', 'books', 'country', 'borth_year'];

  redirectToBookDetail(bookId: string) {
    this.router.navigate(['/book', bookId]);
  }

}

// Интерфейс книги
interface Author {
  id: number;
  name: string;
  books: string;
  country: string;
  borth_year: number;
}
