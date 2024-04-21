import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Author} from "../../Interfaces/Author";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  author: Author = { id: 1, name: 'Author 1', books:  'Book1', country: 'England', birth_year: 1900 };

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  // Метод редактирования книги
  editAuthor(author: Author) {
    this.router.navigate(['/edit_author', author.id]);
  }

  // Метод удаления книги
  deleteAuthor(author: Author) {

    console.log('Deleting book:', author);
  }
}
