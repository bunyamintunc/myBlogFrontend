import { Component, OnInit } from '@angular/core';
import { TripService } from '../service/trip.service';
import { Trip } from './trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor(private tripService:TripService) { }
  trips !: Trip[];

  ngOnInit(): void {
    
    this.tripService.getTrip().subscribe(data=>{
      this.trips=data
    })

  }

}
