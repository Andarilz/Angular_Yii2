import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiHttpService} from "../../api-http.service";
import {Book} from "../../Interfaces/Book";
import {Language} from "../../Interfaces/Language";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  @Output() bookListChanged: EventEmitter<Book[]> = new EventEmitter<Book[]>();

  constructor(public ApiHttpService: ApiHttpService) {

  }

  books: Book[] = [];

  search: string = '';
  selectedLanguages: string[] = [];
  selectedGenre: string = '';
  selectedAuthors: [] = [];
  authors: any = [];
  languages: any[] = [];
  genres: any[] = [];
  minPages: number | null = null;
  maxPages: number | null = null;

  ngOnInit(): void {
    this.ApiHttpService.getAuthors().subscribe(authors => {
      this.authors = authors;
    })
    this.ApiHttpService.getLanguage().subscribe(languages => {
      this.languages = languages;
    })
    this.ApiHttpService.getGenre().subscribe(genre => {
      this.genres = genre;
    })
  }

  sendBookListToParent() {
    this.bookListChanged.emit(this.books);
  }

  applyFilters()
  {
   this.ApiHttpService.getBooks(
     this.search, this.selectedAuthors, this.selectedLanguages, this.selectedGenre, this.minPages, this.maxPages
   ).subscribe(book => {
     this.books = book
     this.sendBookListToParent()
   })
  }

}
