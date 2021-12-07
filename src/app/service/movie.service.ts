import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie/movie';

@Injectable()
export class MovieService {
  
  url="http://localhost:8080/api/movies/getall"
  constructor(private http:HttpClient) { }

  getMovie():Observable<Movie[]>{

    return this.http.get<Movie[]>(this.url)

  }
}
