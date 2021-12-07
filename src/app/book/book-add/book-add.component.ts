import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/service/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
  providers:[BookService]
})
export class BookAddComponent implements OnInit {

  constructor(private builder : FormBuilder,
    private bookService:BookService ) { }

    bookAddForm !: FormGroup 
    book:Book=new Book();

    createBookAddForm(){
      this.bookAddForm=this.builder.group({
        bookName:["",Validators.required],
        bookWriter:["",Validators.required],
        countPaper:["",Validators.required],
        categoryId:["",Validators.required],
        bookImage:["",Validators.required],



      })
    }

  ngOnInit(): void {
    this.createBookAddForm()


  }

  add(){
    if(this.bookAddForm.valid){
      this.book=Object.assign({},this.bookAddForm.value)
    }
    this.bookService.addBook(this.book).subscribe(data=>{
      alert(data.bookName +"eklendi")
    })
  }

}
