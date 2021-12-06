import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NavComponent } from './nav/nav.component';

import {HttpClientModule} from "@angular/common/http";
import { BookAddComponent } from './book/book-add/book-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
