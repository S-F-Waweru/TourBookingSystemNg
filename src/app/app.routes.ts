import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ToursComponent } from './tours/tours.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AddToursComponent } from './add-tours/add-tours.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './Guards/auth-guard.guard';
import { AddHotelsComponent } from './add-hotels/add-hotels.component';
import { AdminComponent } from './admin/admin.component';
import { AdminToursComponent } from './admin-tours/admin-tours.component';
import { AdminHotelsComponent } from './admin-hotels/admin-hotels.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { UpdateHotelsComponent } from './update-hotels/update-hotels.component';
import { UpdateToursComponent } from './update-tours/update-tours.component';
import { UpdateBookingsComponent } from './update-bookings/update-bookings.component';

export const routes: Routes = [
    {path :'register' , component:RegisterComponent},
    {path :'login' , component:LoginComponent},
    {path :'' , component:HomepageComponent},

    {path :'tours', children:[
        {path :'',component:ToursComponent},
        {path :'addtour', canActivate:[authGuard] ,component:AddToursComponent},
        {path:'updatetour/:id',canActivate:[authGuard], component:UpdateToursComponent},
        {path :'admin', canActivate:[authGuard] ,component:AdminToursComponent}

    ]},
    {path :'hotels',children:[
        {path:'', component:HotelsComponent},
        {path:'addhotel',canActivate:[authGuard], component:AddHotelsComponent},
        {path:'updatehotel/:id',canActivate:[authGuard], component:UpdateHotelsComponent},
        {path :'admin', canActivate:[authGuard] ,component:AdminHotelsComponent}

    ]},
    {path :'bookings',canActivate:[authGuard], children :[
        {path: '',component:BookingsComponent},
        {path: 'addBooking/:id',component:AddBookingComponent},
        {path:'updateBooking/:id',canActivate:[authGuard], component:UpdateBookingsComponent},
        {path: 'admin',component:AdminComponent},
       

    ]},

    {path :'admin',canActivate:[authGuard], component:AdminComponent},
    {path :'**' , component: NotFoundComponent}

];