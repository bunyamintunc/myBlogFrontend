
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css'],
  providers:[MovieService]
})
export class MovieAddComponent implements OnInit {

  constructor(private builder : FormBuilder,
    private movieService:MovieService ) { }

    movieAddForm !: FormGroup 
    movie:Movie=new Movie();

    createMovieAddForm(){
      this.movieAddForm=this.builder.group({
        movieName:["",Validators.required],
        description:["",Validators.required],
        movieImage:["",Validators.required],
        watchDate:["",Validators.required],
        



      })
    }

  ngOnInit(): void {
    this.createMovieAddForm()


  }

  add(){
    if(this.movieAddForm.valid){
      this.movie=Object.assign({},this.movieAddForm.value)
    }
    this.movieService.addMovie(this.movie).subscribe(data=>{
      alert(data.movieName +"eklendi")
    })
  }


}
