import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from "../../Interfaces/Book";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: Book = { id: 1, title: 'Book 1', author: {id: 1, name: "Test", country: 'bl', birth_year: 2014}, language: 'English', pages: 200, description: 'Description 1', genre: 'comedy' };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Метод редактирования книги
  editBook(book: Book) {
    this.router.navigate(['/edit_book', book.id]);
  }

  // Метод удаления книги
  deleteBook(book: Book) {

    console.log('Deleting book:', book);
  }

}

