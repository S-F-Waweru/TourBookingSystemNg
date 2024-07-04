import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TourInterface } from "../Reducers/tours.reducers";


const tourSelectorFeature = createFeatureSelector<TourInterface>('tours')

export  const successMessageselector = createSelector(
    tourSelectorFeature,
    (state) => state.addTourSuccessMessage
)
export  const errorMessageselector = createSelector(
    tourSelectorFeature,
    (state) => state.addTourErrorMessage || state.getToursErrorMessage
)

export  const toursArraySelector = createSelector(
    tourSelectorFeature,
    (state) => state.getToursSuccessMessage
)
console.log(toursArraySelector)

