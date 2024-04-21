import { Component } from '@angular/core';
import {Book} from "../../Interfaces/Book";
import {ActivatedRoute} from "@angular/router";
import {Author} from "../../Interfaces/Author";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  author: Author = { id: 1, name: 'Author 1', books:  'Book1', country: 'England', birth_year: 1900 };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Метод редактирования книги
  editAuthor(author: Author) {

    console.log('Editing book:', author);
  }

  // Метод удаления книги
  deleteAuthor(author: Author) {

    console.log('Deleting book:', author);
  }
}
