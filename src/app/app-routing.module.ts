import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouthMeComponent } from './abouth-me/abouth-me.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { BookComponent } from './book/book.component';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path:"books",component:BookComponent},
  {path:"books/book-add", component:BookAddComponent},
  {path:"movies",component:MovieComponent},
  {path:"movies/movies-add",component:MovieAddComponent},
  {path:"",component:AbouthMeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
