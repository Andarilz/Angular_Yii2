import {Component, OnInit} from '@angular/core';
import {Book} from "../../Interfaces/Book";
import {Author} from "../../Interfaces/Author";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent implements OnInit{
  author: Author = {
    id: null,
    name: '',
    country: '',
    birth_year: 0,
    books: []
  };

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.author.id = params['id'];
    });
  }

  createAuthor() {
    console.log(this.author);
  }
}
