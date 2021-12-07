import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Movie } from '../movie/movie';

@Injectable()
export class MovieService {
  
  url="http://localhost:8080/api/movies"
  newurl=this.url+"/add"
  constructor(private http:HttpClient) { }

  getMovie():Observable<Movie[]>{

    return this.http.get<Movie[]>(this.url+"/getall")
  }

  addMovie(movie:Movie):Observable<Movie>{
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token',
      })
    };
    alert(movie.movieName)
    return this.http.post<Movie>(this.url+"/add",movie,httpOptions).pipe(
      tap(data=>{
        console.log(JSON.stringify(data)),
        catchError(this.heandleError)
      })
      
    );
  }

  heandleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = 'sistemsel bir hata';
    }

    return throwError(errorMessage);
  }
}
