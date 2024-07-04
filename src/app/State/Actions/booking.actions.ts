import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { BookingReq, BookingResponse, Booking } from "../../Models/Booking";

export const BookingsAction = createActionGroup({
    source: 'TOURS API',
    events: {
        // add booking
        'addBooking':props<{booking:BookingReq}>(),
        'addBooking success':props<{response :BookingResponse}>(),
        'addBooking failure':props<{message:string}>(),

        
        //getBookings
        'getBookings':emptyProps,
        'getBookings success':props<{bookings : Booking[]}>(),
        'getBookings failure':props<{message:string}>(),

        // getBooking
        'getBooking':props<{id : string}>,
        'getBooking success':props<{booking : Booking}>(),
        'getBooking failure':props<{message:string}>(),

         // updateBooking
         'updateBooking':props<{id : string, booking:BookingReq}>,
         'updateBooking success':props<{response :BookingResponse}>(),
         'updateBooking failure':props<{message:string}>(),

          // del Booking
        'deleteBooking':props<{id:string}>(),
        'deleteBooking success':props<{response :BookingResponse}>(),
        'deleteBooking failure':props<{message:string}>(),


    }

}

)