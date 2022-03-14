import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {

  bookings : any;
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(){
    this.bookingService.getBookingList().subscribe((res)=>{
      this.bookings = res;
      console.log(JSON.stringify(res));
    })
  }
}
