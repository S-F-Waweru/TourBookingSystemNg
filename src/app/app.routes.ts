import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ToursComponent } from './tours/tours.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AddToursComponent } from './add-tours/add-tours.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path :'register' , component:RegisterComponent},
    {path :'login' , component:LoginComponent},
    {path :'' , component:HomepageComponent},
    
    {path :'tours', children:[
        {path :'',component:ToursComponent},
        {path :'addtour',component:AddToursComponent},
    ]},
    {path :'hotels', component:HotelsComponent},
    {path :'bookings', component:BookingsComponent},


    {path :'**' , component: NotFoundComponent}

];