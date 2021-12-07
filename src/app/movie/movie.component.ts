import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[MovieService]
})
export class MovieComponent implements OnInit {

  constructor(private movieService :MovieService) { }

  movies !: Movie[];

  ngOnInit(): void {

    this.movieService.getMovie().subscribe(data=>{
      this.movies=data
    })
    
  }

}
