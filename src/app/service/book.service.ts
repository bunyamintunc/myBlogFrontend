import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book/book';

@Injectable()
export class BookService {

  constructor(private http:HttpClient) { }

  getBook():Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:8080/api/books/getall");

  }
}
