import { Component } from '@angular/core';
import {Book} from "../../Interfaces/Book";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    language: '',
    pages: 0,
    description: '',
    genre: ''
  };

  createBook() {
    console.log(this.book);
  }
}
