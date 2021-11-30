import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private angularfire: AngularFirestore) { }
  createBooking(data: any){
    return new Promise<any>((resolve, reject)=>{
      this.angularfire.collection('booking').add(data).then((res)=>{}, (err)=> reject(err));
    });
  }

  updateBooking(booking: any){
    this.angularfire.collection("booking").doc(booking.payload.doc.uid).set({completed: true}, {merge: true});
  }

  deleteBooking(booking: any){
    this.angularfire.collection("booking").doc(booking.payload.doc.uid).delete();
  }

  getBookingList(){
   return  this.angularfire.collection("booking").snapshotChanges(); 
  }
}
