import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Author} from "../../Interfaces/Author";
import {ApiHttpService} from "../../api-http.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  author: Author = { id: null, name: '', country: '', birth_year: 0 };

  constructor(public router: Router, public route: ActivatedRoute, public ApiHtmlService: ApiHttpService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id !== null){
        this.ApiHtmlService.getAuthor(id).subscribe(author => {
          this.author = author;
        });
      }
    })
  }

  // Метод редактирования книги
  editAuthor(author: Author) {
    this.router.navigate(['/edit_author', author.id]);
  }

  // Метод удаления книги
  deleteAuthor(author: Author) {

    console.log('Deleting book:', author);
  }
}
