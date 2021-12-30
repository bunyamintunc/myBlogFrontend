import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripService } from 'src/app/service/trip.service';
import { Trip } from '../trip';

@Component({
  selector: 'app-trip-add',
  templateUrl: './trip-add.component.html',
  styleUrls: ['./trip-add.component.css']
})
export class TripAddComponent implements OnInit {

  constructor(private builder:FormBuilder,private tripService :TripService) { }

  tripAddFrom !: FormGroup
  trip:Trip=new Trip()

  createTripAddForm(){
    this.tripAddFrom=this.builder.group({
      province:["",Validators.required],
      country:["",Validators.required],
      place_visited:["",Validators.required],
      place_image:["",Validators.required],
      descriptions:["",Validators.required],
    })
  }

  ngOnInit(): void {
    this.createTripAddForm()
  }

  add(){
    if(this.tripAddFrom.valid){
      this.trip=Object.assign({},this.tripAddFrom.value)
    }
    this.tripService.addMovie(this.trip).subscribe(data=>{
      alert(data.place_visited +"eklendi")
    })
  }

}
