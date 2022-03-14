import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm = new FormGroup({
    bookingName: new FormControl('',[Validators.required]),
    bookingSurname: new FormControl('',[Validators.required]),
    bookingPhone: new FormControl('',[Validators.required]),
    bookingCheckin: new FormControl('',[Validators.required]),
    bookingCheckout: new FormControl('',[Validators.required]),
    bookingEmail: new FormControl('',[Validators.required]),
  });
  
  
  constructor(private BookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
  }
  
  submit(){
    var data = this.bookingForm.value;
    this.BookingService.createBooking(data).then((res)=>{
    this.router.navigate(['/bookingInfo']);
    })
  }
}
