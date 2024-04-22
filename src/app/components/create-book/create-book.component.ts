import { Component, OnInit } from '@angular/core';
import {Book} from "../../Interfaces/Book";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ApiHttpService} from "../../api-http.service";
import {Author} from "../../Interfaces/Author";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit{
  book: Book = {
    id: null,
    author_id: '',
    title: '',
    language: '',
    pages: 0,
    description: '',
    genre: ''
  };

  authors: Author[] = [];

  errors: { [key: string]: string[] } = {};

  selectedAuthorId = '';

  createOrUpdate: boolean = false;

  constructor(public route: ActivatedRoute, public ApiHttpService: ApiHttpService, public router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.book.id = params['id'];
    });
    this.ApiHttpService.getAuthors().subscribe(authors => {
      this.authors = authors;
      this.createOrUpdate = true;
    })
  }

  getErrorKeys() {
    return Object.keys(this.errors);
  }

  createBook() {
    this.ApiHttpService.createBook({...this.book, author_id: this.selectedAuthorId}).subscribe(response => {
      if(response.errors){
        this.errors = response.errors
      } else {
        this.router.navigate(['']);
      }
    });
  }

  editBook(){

  }
}
