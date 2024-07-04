import { Injectable } from "@angular/core";
import { HotelsService } from "../../Services/hotels.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, catchError, of, concatMap } from "rxjs";
import { HotelsAction } from "../Actions/hotels.action";



@Injectable()
export class HotelsEffect {
    constructor(
        private action$:Actions,
        private hs :HotelsService
    ){}
    addHotel$= createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(HotelsAction.addHotel),
            exhaustMap((req)=>this.hs.addHotel(req.hotel).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    return HotelsAction.addHotelSuccess({response:res})
                }),
                catchError(error => of(HotelsAction
                    .addHotelFailure({message:error})
                ))
                )
            )
        )
    }) 


    getHotels$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(HotelsAction.getHotels),
            concatMap(()=>this.hs.getHotels().pipe(
                map(res => {
                    return HotelsAction.getHotelsSuccess({hotels:res})
                }),
                catchError(error => of(HotelsAction.
                    getHotelsFailure({message:error})
                ))
            ))
        )
    })

    getHotel$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(HotelsAction.getHotel),
            // ***
            exhaustMap((req)=>this.hs.getHotel(req._p.id).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    return HotelsAction.getHotelSuccess({hotel:res})
                }),
                catchError(error => of(HotelsAction
                    .getHotelFailure({message:error})
                ))
                )
            )
        )
    })  

    updateHotel$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(HotelsAction.updateHotel),
            // ***
            concatMap((req)=>this.hs.updateHotel(req._p.id, req._p.Hotel).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    return HotelsAction.updateHotelSuccess({response:res})
                }),
                catchError(error => of(HotelsAction
                    .updateHotelFailure({message:error})
                ))
                )
            )
        )
    }) 

    deleteHotel$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(HotelsAction.deleteHotel),
            // ***
            concatMap((req)=>this.hs.deleteHotel(req.id).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    return HotelsAction.deleteHotelSuccess({response:res})
                }),
                catchError(error => of(HotelsAction
                    .deleteHotelFailure({message:error})
                ))
                )
            )
        )
    }) 

}