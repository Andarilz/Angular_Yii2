import {Component, OnInit} from '@angular/core';
import {Book} from "../../Interfaces/Book";
import {Author} from "../../Interfaces/Author";
import {ActivatedRoute, Router} from "@angular/router";
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
    birth_year: null
  };

  errors: { [key: string]: string[] } = {};

  updateFlag: boolean = false;

  constructor(public route: ActivatedRoute, public ApiHttpService: ApiHttpService, public router: Router) {
  }

  getErrorKeys() {
    return Object.keys(this.errors);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.author.id = params['id'];
      if(this.author.id !== null){
        this.ApiHttpService.getAuthor((this.author.id).toString()).subscribe(author => {
          this.author = author;
          this.updateFlag = true;
        });
      }
    });
  }

  createAuthor(){
   return this.ApiHttpService.createAuthor(this.author).subscribe(
      (response) => {
        if(response.errors){
          this.errors = response.errors
        }
        this.router.navigate(['authors'])
      }
    )
  }

  updateAuthor(){
    this.ApiHttpService.updateAuthor(this.author).subscribe(
      (response) => {
        if(response.errors){
          this.errors = response.errors
        }
        this.router.navigate(['authors'])
      }
    )
  }

  createOrUpdateAuthor() {
    if(!this.updateFlag){
      this.createAuthor()
    } else {
      this.updateAuthor()
    }
  }

}
