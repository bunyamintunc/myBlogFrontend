import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[BookService]
})
export class BookComponent implements OnInit {

  constructor(private http:HttpClient,private bookService:BookService) { }
  
  books:Book[] | any
  ngOnInit(): void {

    this.bookService.getBook().subscribe(data=>{
      this.books=data
    });
  }

}
