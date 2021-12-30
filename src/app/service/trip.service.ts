
import { Injectable } from '@angular/core';

import { Trip } from '../trip/trip';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8080/api/trips"

  getTrip():Observable<Trip[]>{
    
    return this.http.get<Trip[]>(this.url+"/getall")
    
  }

  addMovie(trip:Trip):Observable<Trip>{
    const httpOptions={
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token',
      })
    };
    alert(trip.place_visited)
    return this.http.post<Trip>(this.url+"/add",trip,httpOptions).pipe(
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
