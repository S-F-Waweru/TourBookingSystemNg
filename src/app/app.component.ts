import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ToursComponent } from './tours/tours.component';
import { AddToursComponent } from './add-tours/add-tours.component';
import { AdminToursComponent } from './admin-tours/admin-tours.component';
import { HotelsComponent } from './hotels/hotels.component';
import { AddHotelsComponent } from './add-hotels/add-hotels.component';
import { AdminHotelsComponent } from './admin-hotels/admin-hotels.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,
           FooterComponent, ToursComponent,
           AddToursComponent,AdminToursComponent,
           HotelsComponent,AddHotelsComponent,AdminHotelsComponent,
           AddBookingComponent,BookingsComponent,
           HomepageComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TourBookingSystemNg';
}
