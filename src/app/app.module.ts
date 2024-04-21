import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookComponent } from './components/book/book.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorComponent } from './components/author/author.component';
import { NavComponent } from './components/nav/nav.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookComponent,
    AuthorsListComponent,
    AuthorComponent,
    NavComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
