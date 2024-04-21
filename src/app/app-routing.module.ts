import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from "./components/books-list/books-list.component";
import {BookComponent} from "./components/book/book.component";

const routes: Routes = [
  {path: "", component: BooksListComponent},
  {path: "book/:id", component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
