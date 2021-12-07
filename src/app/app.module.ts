import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NavComponent } from './nav/nav.component';

import {HttpClientModule} from "@angular/common/http";
import { BookAddComponent } from './book/book-add/book-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';
import { AbouthMeComponent } from './abouth-me/abouth-me.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavComponent,
    BookAddComponent,
    MovieComponent,
    MovieAddComponent,
    AbouthMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
