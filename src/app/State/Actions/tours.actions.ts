import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Tour, TourReq, TourResponse } from "../../Models/Tour";

export const ToursAction = createActionGroup({
    source: 'TOURS API',
    events: {
        // add tour
        'addTour':props<{tour:TourReq}>(),
        'addTour success':props<{response :TourResponse}>(),
        'addTour failure':props<{message:string}>(),

        
        //getTours
        'getTours':emptyProps,
        'getTours success':props<{tours : Tour[]}>(),
        'getTours failure':props<{message:string}>(),

        // getTour
        'getTour':props<{id : string}>,
        'getTour success':props<{tour : Tour}>(),
        'getTour failure':props<{message:string}>(),

         // updateTour
         'updateTour':props<{id : string, tour:TourReq}>,
         'updateTour success':props<{response :TourResponse}>(),
         'updateTour failure':props<{message:string}>(),

          // del Tour
        'deleteTour':props<{id:string}>(),
        'deleteTour success':props<{response :TourResponse}>(),
        'deleteTour failure':props<{message:string}>(),


    }

}

)