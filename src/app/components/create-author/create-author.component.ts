import { Component } from '@angular/core';
import {Book} from "../../Interfaces/Book";
import {Author} from "../../Interfaces/Author";

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent {
  author: Author = {
    id: 0,
    name: '',
    country: '',
    birth_year: 0,
    books: ''
  };

  createAuthor() {
    console.log(this.author);
  }
}
