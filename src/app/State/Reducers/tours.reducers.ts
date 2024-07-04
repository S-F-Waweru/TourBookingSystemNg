import { createReducer, on } from "@ngrx/store"
import { ToursAction } from "../Actions/tours.actions"
import { Tour } from "../../Models/Tour"

const emptyTour: Tour = {
    Id: '',
    Name: '',
    Destination: '',
    Description: '',
    Price: 0
}

export interface TourInterface {
    addTourSuccessMessage: string,
    addTourErrorMessage: string,
    addTourLoading: boolean,


    getToursSuccessMessage: Tour[],
    getToursErrorMessage: string,
    getToursLoading: boolean,

    getTourSuccessMessage: Tour,
    getTourErrorMessage: string,
    getTourLoading: boolean,
}

const initialState: TourInterface = {
    addTourSuccessMessage: '',
    addTourErrorMessage: '',
    addTourLoading: false,

    getToursSuccessMessage: [],
    getToursErrorMessage: '',
    getToursLoading: false,

    getTourSuccessMessage: emptyTour,
    getTourErrorMessage: '',
    getTourLoading: false
}
export const tourReducer = createReducer(
    initialState,


    // ADD TOUR-------------
    on(ToursAction.addTour, (state) => {
        return {
            ...state,
            addTourSuccessMessage: '',
            addTourErrorMessage: '',
            addTourLoading: true
        }
    }),

    on(ToursAction.addTourSuccess, (state, action) => {
        return {
            ...state,
            addTourSuccessMessage: action.response.message,
            addTourErrorMessage: '',
            addTourLoading: false
        }
    }),

    on(ToursAction.addTourFailure, (state, action) => {
        return {
            ...state,
            addTourSuccessMessage: '',
            addTourErrorMessage: action.message,
            addTourLoading: false
        }
    }),


    // GET TOURS
    on(ToursAction.getTours, (state) => {
        return {
            ...state,
            getToursSuccessMessage: [],
            getToursErrorMessage: '',
            getToursLoading: true
        }
    }),

    on(ToursAction.getToursSuccess, (state, { tours }) => {
        return {
            ...state,
            getToursSuccessMessage: tours,
            getToursErrorMessage: '',
            getToursLoading: false
        }
    }),

    on(ToursAction.getToursFailure, (state, action) => {
        return {
            ...state,
            getToursSuccessMessage: [],
            getToursErrorMessage: action.message,
            getToursLoading: false
        }
    }),


    // GET TOUR
    on(ToursAction.getTour, (state) => {
        return {
            ...state,
            getTourSuccessMessage: emptyTour,
            getTourErrorMessage: '',
            getTourLoading: true
        }
    }),

    on(ToursAction.getTourSuccess, (state, action) => {
        return {
            ...state,
            getTourSuccessMessage: action.tour,
            getTourErrorMessage: '',
            getTourLoading: false
        }
    }),

    on(ToursAction.getTourFailure, (state, action) => {
        return {
            ...state,
            getTourSuccessMessage: emptyTour,
            getTourErrorMessage: action.message,
            getTourLoading: false
        }
    }),

    //Update tour
    on(ToursAction.updateTour, (state) => {
        return {
            ...state,
            updateTourSuccessMessage: emptyTour,
            updateTourErrorMessage: '',
            updateTourLoading: true
        }
    }),

    on(ToursAction.updateTourSuccess, (state, action) => {
        return {
            ...state,
            updateTourSuccessMessage: action.response.message,
            updateTourErrorMessage: '',
            updateTourLoading: false
        }
    }),

    on(ToursAction.updateTourFailure, (state, action) => {
        return {
            ...state,
            updateTourSuccessMessage: emptyTour,
            updateTourErrorMessage: action.message,
            updateTourLoading: false
        }
    }),

    //delete tour

    on(ToursAction.deleteTour, (state) => {
        return {
            ...state,
            deleteTourSuccessMessage: '',
            deleteTourErrorMessage: '',
            deleteTourLoading: true
        }
    }),

    on(ToursAction.deleteTourSuccess, (state, action) => {
        return {
            ...state,
            deleteTourSuccessMessage: action.response.message,
            deleteTourErrorMessage: '',
            deleteTourLoading: false
        }
    }),
    
    on(ToursAction.deleteTourFailure, (state, action) => {
        return {
            ...state,
            deleteTourSuccessMessage: '',
            deleteTourErrorMessage: action.message,
            deleteTourLoading: false
        }
    }),
)

