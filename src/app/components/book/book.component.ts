import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Book} from "../../Interfaces/Book";
import {ApiHttpService} from "../../api-http.service";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: Book = { id: null, title: '', author_name: '', language: '', pages: 0, description: '', genre: '' };

  constructor(private router: Router, public ApiHttpService: ApiHttpService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id !== null){
        this.ApiHttpService.getBook(id).subscribe(book => {
          this.book = book;
        });
      }
    })
  }

  // Метод редактирования книги
  editBook(book: Book) {
    this.router.navigate(['/edit_book', book.id]);
  }

  // Метод удаления книги
  deleteBook(book: Book) {
    console.log('Deleting book:', book);
  }

}

