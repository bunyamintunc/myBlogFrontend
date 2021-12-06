import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book/book';

@Injectable()
export class BookService {

  constructor(private http:HttpClient) { }
   url="http://localhost:8080/api/books";
  getBook():Observable<Book[]>{
    return this.http.get<Book[]>(this.url+"/getall");

  }

  addBook(book:Book):Observable<Book>{
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token',
      })
    };
    return this.http.post<Book>(this.url,book,httpOptions);
  }
}
