import { props, emptyProps, createActionGroup } from "@ngrx/store";
import { Hotel, HotelReq, HotelResponse } from "../../Models/Hotels";

export const HotelsAction =createActionGroup({
    source: 'HotelS API',
    events: {
        // add Hotel
        'addHotel':props<{hotel:HotelReq}>(),
        'addHotel success':props<{response : HotelResponse}>(),
        'addHotel failure':props<{message:string}>(),

        
        //getHotels
        'getHotels':emptyProps,
        'getHotels success':props<{hotels : Hotel[]}>(),
        'getHotels failure':props<{message:string}>(),

        // getHotel
        'getHotel':props<{id : string}>,
        'getHotel success':props<{hotel : Hotel}>(),
        'getHotel failure':props<{message:string}>(),

         // updateHotel
         'updateHotel':props<{id : string, Hotel:HotelReq}>,
         'updateHotel success':props<{response :HotelResponse}>(),
         'updateHotel failure':props<{message:string}>(),

          // del Hotel
        'deleteHotel':props<{id:string}>(),
        'deleteHotel success':props<{response :HotelResponse}>(),
        'deleteHotel failure':props<{message:string}>(),


    }
}
)