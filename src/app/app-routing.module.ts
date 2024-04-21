import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from "./components/books-list/books-list.component";
import {BookComponent} from "./components/book/book.component";
import {AuthorsListComponent} from "./components/authors-list/authors-list.component";
import {AuthorComponent} from "./components/author/author.component";

const routes: Routes = [
  {path: "", component: BooksListComponent},
  {path: "book/:id", component: BookComponent},
  {path: "authors", component :AuthorsListComponent},
  {path: "author/:id", component: AuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
