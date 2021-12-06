import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book/book-add/book-add.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path:"books",component:BookComponent},
  {path:"books/book-add", component:BookAddComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
