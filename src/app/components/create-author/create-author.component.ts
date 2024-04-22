import {Component, OnInit} from '@angular/core';
import {Book} from "../../Interfaces/Book";
import {Author} from "../../Interfaces/Author";
import {ActivatedRoute} from "@angular/router";
import {ApiHttpService} from "../../api-http.service";

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
    birth_year: 0
  };

  errors: { [key: string]: string[] } = {};

  constructor(public route: ActivatedRoute, public ApiHttpService: ApiHttpService) {
  }

  getErrorKeys() {
    return Object.keys(this.errors);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.author.id = params['id'];
    });
  }

  createAuthor() {
    this.ApiHttpService.createAuthor(this.author).subscribe(
      (response) => {
        if(response.errors){
          this.errors = response.errors
        }
      }
    );
  }

  editAuthor(){
    console.log()
  }
}
