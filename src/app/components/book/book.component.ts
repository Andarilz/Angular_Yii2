import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Book} from "../../Interfaces/Book";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: Book = { id: 1, title: 'Book 1', author: 'Author 1', language: 'English', pages: 200, description: 'Description 1', genre: 'comedy' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Метод редактирования книги
  editBook(book: Book) {

    console.log('Editing book:', book);
  }

  // Метод удаления книги
  deleteBook(book: Book) {

    console.log('Deleting book:', book);
  }

}

