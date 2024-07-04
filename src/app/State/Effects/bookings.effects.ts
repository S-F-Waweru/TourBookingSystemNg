import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, exhaustMap, map, of } from "rxjs";
import { BookingsService } from "../../Services/bookings.service";
import { Injectable } from "@angular/core";
import { BookingsAction } from "../Actions/booking.actions";

@Injectable()
export class BookingsEffect {
    constructor(
        private action$:Actions,
        private bs :BookingsService
    ){}
    addBooking$ = createEffect(()=>{
        console.log("WE are at effecbs");
        return this.action$.pipe(
            ofType(BookingsAction.addBooking),
            exhaustMap((req)=>this.bs.addBooking(req.booking).pipe(
                map(res =>{
                    console.log("WE are at effecbs sucess");
                    return BookingsAction.addBookingSuccess({response:res})
                }),
                catchError(error => of(BookingsAction
                    .addBookingFailure({message:error})
                ))
                )
            )
        )
    }) 


    getBookings$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(BookingsAction.getBookings),
            concatMap(()=>this.bs.getBookings().pipe(
                map(res => {
                    return BookingsAction.getBookingsSuccess({bookings:res})
                }),
                catchError(error => of(BookingsAction.
                    getBookingsFailure({message:error})
                ))
            ))
        )
    })

    getBooking$ = createEffect(()=>{
        console.log("WE are at effecbs");
        return this.action$.pipe(
            ofType(BookingsAction.getBooking),
            // ***
            exhaustMap((req)=>this.bs.getBooking(req._p.id).pipe(
                map(res =>{
                    console.log("WE are at effecbs sucess");
                    return BookingsAction.getBookingSuccess({booking:res})
                }),
                catchError(error => of(BookingsAction
                    .getBookingFailure({message:error})
                ))
                )
            )
        )
    }) 

    updateBooking$ = createEffect(()=>{
        console.log("WE are at effecbs");
        return this.action$.pipe(
            ofType(BookingsAction.updateBooking),
            // ***
            concatMap((req)=>this.bs.updateBooking(req._p.id, req._p.booking).pipe(
                map(res =>{
                    console.log("WE are at effecbs sucess");
                    return BookingsAction.updateBookingSuccess({response:res})
                }),
                catchError(error => of(BookingsAction
                    .updateBookingFailure({message:error})
                ))
                )
            )
        )
    }) 

    deleteBooking$ = createEffect(()=>{
        console.log("WE are at effecbs");
        return this.action$.pipe(
            ofType(BookingsAction.deleteBooking),
            // ***
            concatMap((req)=>this.bs.deleteBooking(req.id).pipe(
                map(res =>{
                    console.log("WE are at effecbs sucess");
                    return BookingsAction.deleteBookingSuccess({response:res})
                }),
                catchError(error => of(BookingsAction
                    .deleteBookingFailure({message:error})
                ))
                )
            )
        )
    }) 


  
}
