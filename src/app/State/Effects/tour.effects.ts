import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ToursAction } from "../Actions/tours.actions";
import { catchError, concatMap, exhaustMap, map, of } from "rxjs";
import { ToursService } from "../../Services/tours.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ToursEffect {
    constructor(
        private action$:Actions,
        private ts :ToursService
    ){}
    addTour$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(ToursAction.addTour),
            exhaustMap((req)=>this.ts.addTour(req.tour).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    return ToursAction.addTourSuccess({response:res})
                }),
                catchError(error => of(ToursAction
                    .addTourFailure({message:error})
                ))
                )
            )
        )
    }) 


    getTours$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(ToursAction.getTours),
            concatMap(()=>this.ts.getTours().pipe(
                map(res => {
                    return ToursAction.getToursSuccess({tours:res})
                }),
                catchError(error => of(ToursAction.
                    getToursFailure({message:error})
                ))
            ))
        )
    })

    getTour$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(ToursAction.getTour),
            // ***
            exhaustMap((req)=>this.ts.getTour(req._p.id).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    return ToursAction.getTourSuccess({tour:res})
                }),
                catchError(error => of(ToursAction
                    .getTourFailure({message:error})
                ))
                )
            )
        )
    }) 

    updateTour$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(ToursAction.updateTour),
            // ***
            concatMap((req)=>this.ts.updateTour(req._p.id, req._p.tour).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    return ToursAction.updateTourSuccess({response:res})
                }),
                catchError(error => of(ToursAction
                    .updateTourFailure({message:error})
                ))
                )
            )
        )
    }) 

    deleteTour$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(ToursAction.deleteTour),
            // ***
            concatMap((req)=>this.ts.deleteTour(req.id).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    return ToursAction.deleteTourSuccess({response:res})
                }),
                catchError(error => of(ToursAction
                    .deleteTourFailure({message:error})
                ))
                )
            )
        )
    }) 


  
}
