import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FamilyRoomComponent } from './family-room/family-room.component';
import { DeluxeRoomComponent } from './deluxe-room/deluxe-room.component';
import { StandardRoomComponent } from './standard-room/standard-room.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { UploadComponent } from './upload/upload.component';
import { Router } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'family-room', component: FamilyRoomComponent},
  { path: 'deluxe-room', component: DeluxeRoomComponent},
  { path: 'standard-room', component: StandardRoomComponent},
  { path: 'bookingInfo', component: BookingInfoComponent},
  { path: 'upload', component: UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BookingComponent, 
                                  PaymentComponent, HeaderComponent, 
                                  FooterComponent, LoginComponent,
                                  FamilyRoomComponent, DeluxeRoomComponent,
                                  StandardRoomComponent, BookingInfoComponent,
                                  UploadComponent, RegisterComponent]