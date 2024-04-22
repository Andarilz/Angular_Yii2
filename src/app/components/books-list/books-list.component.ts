
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../../Interfaces/Book";
import {ApiHttpService} from "../../api-http.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit{

  //конструктор с dependency injection
  constructor(private router: Router, public apiService: ApiHttpService) {}

  books: Book[] = [];

  ngOnInit(): void {
    this.apiService.getBooks().subscribe(books => {
      this.books = books;
    });
  }


  displayedColumns: string[] = ['title', 'author_name', 'language', 'pages', 'description', 'genre', 'actions'];

  redirectToBookDetail(bookId: string) {
    this.router.navigate(['/book', bookId]);
  }

  editBook(book: Book){
    this.router.navigate(['edit_book', book.id])
  }

  deleteBook(book: Book){
    console.log(book.id)
  }

}

