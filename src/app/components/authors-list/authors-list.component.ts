
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../../Interfaces/Book";
import {Author} from "../../Interfaces/Author";
import {ApiHttpService} from "../../api-http.service";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit{

  //конструктор с dependency injection
  constructor(private router: Router, public ApiHttpService: ApiHttpService) {
  }

  authors: Author[] = [];

  ngOnInit(): void {
    this.ApiHttpService.getAuthors().subscribe(authors => {
      console.log(authors);
      this.authors = authors;
    })
  }

  //Данные для таблицы книг
  // authors: Author[] = [
  //   { id: 1, name: 'Author 1', books: [{ id: 1, title: 'Book 1', language: 'English', pages: 200, description: 'Description 1', genre: 'comedy' }], country: 'English', birth_year: 1990 },
  //   { id: 1, name: 'Author 1', books: [ { id: 1, title: 'Book 1', language: 'English', pages: 200, description: 'Description 1', genre: 'comedy' }], country: 'English', birth_year: 1990 },
  //   { id: 1, name: 'Author 1', books: [ { id: 1, title: 'Book 1', language: 'English', pages: 200, description: 'Description 1', genre: 'comedy' }], country: 'English', birth_year: 1990 },
  // ];


  displayedColumns: string[] = ['name', 'country', 'borth_year'];

  redirectToAuthorDetail(authorId: string) {
    this.router.navigate(['/author', authorId]);
  }

}
