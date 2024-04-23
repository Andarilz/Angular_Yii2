import { Component, OnInit } from '@angular/core';
import {Book} from "../../Interfaces/Book";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ApiHttpService} from "../../api-http.service";
import {Author} from "../../Interfaces/Author";
import {Language} from "../../Interfaces/Language";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit{
  book: Book = {
    id: null,
    author_id: null,
    title: '',
    language: '',
    pages: null,
    description: '',
    genre: ''
  };

  authors: Author[] = [];

  language: Language[] = [];

  errors: { [key: string]: string[] } = {};

  selectedAuthorId: number | null = null;

  selectedLanguage: string | null = null;

  createOrUpdateFlag: boolean = false;

  constructor(public route: ActivatedRoute, public ApiHttpService: ApiHttpService, public router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.book.id = params['id'];
      if(this.book.id !== null){
        const bookId = (this.book.id).toString();
        this.ApiHttpService.getBook(bookId).subscribe(book => {
          this.book = book;
          this.createOrUpdateFlag = true;
          if(this.book.author !== undefined){
            this.selectedAuthorId = this.book.author.id
          }
        });
      }
    });
    this.ApiHttpService.getAuthors().subscribe(authors => {
      this.authors = authors;
    })
    this.ApiHttpService.getLanguage().subscribe(language => {
      this.language = language;
      console.log('lang', this.language)
    })
  }

  getErrorKeys() {
    return Object.keys(this.errors);
  }

  createBook(){
    this.ApiHttpService.createBook({...this.book, author_id: this.selectedAuthorId, language: this.selectedLanguage}).subscribe(response => {
      if(response.errors){
        this.errors = response.errors
      } else {
        this.router.navigate(['']);
      }
    });
  }

  updateBook(){
    this.ApiHttpService.updateBook({...this.book, author_id: this.selectedAuthorId}).subscribe(response => {
      if(response.errors){
        this.errors = response.errors
      } else {
        this.router.navigate(['']);
      }
    });
  }

  createOrUpdateBook() {
    if(!this.createOrUpdateFlag){
      this.createBook();
    } else {
      this.updateBook()
    }
  }

}
