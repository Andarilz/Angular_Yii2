import { Component, OnInit } from '@angular/core';
import {Book} from "../../Interfaces/Book";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit{
  book: Book = {
    id: null,
    title: '',
    language: '',
    pages: 0,
    description: '',
    genre: ''
  };

  constructor(public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.book.id = params['id'];
    });
  }


  createBook() {
    console.log(this.book);
  }
}
