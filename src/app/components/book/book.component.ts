import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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

interface Book {
  id: number;
  title: string;
  author: string;
  language: string;
  pages: number;
  description: string;
  genre: string;
}
