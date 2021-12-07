import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private movieService:MovieService) { }

  addMovieForm !: FormGroup
  movie:Movie=new Movie();

  createFormAddMovie(){
    this.addMovieForm=this.formBuilder.group({

      movieName:["",Validators.required],
      description:["",Validators.required],
      movieImage:["",Validators.required],
      watchDate:["",Validators.required]

    })
  }

  ngOnInit(): void {
    this.createFormAddMovie()
  }

  add(){

    if(this.addMovieForm.valid){
      this.movie=Object.assign({},this.addMovieForm.value)
      
    }

    this.movieService.addMovie(this.movie).subscribe(data=>{
      alert(data.movieName +"Başari ile eklendi")
    })


  }

}
