import { createReducer, on } from "@ngrx/store";
import { Hotel } from "../../Models/Hotels";
import { HotelsAction } from "../Actions/hotels.action";

const emptyHotel ={
    Id :'',
    Name :'',
    Location : '',
    StarRating :0

}
export interface HotelInterface {
    addHotelSuccessMessage: string,
    addHotelErrorMessage: string,
    addHotelLoading: boolean,


    getHotelsSuccessMessage: Hotel[],
    getHotelsErrorMessage: string,
    getHotelsLoading: boolean,

    getHotelSuccessMessage: Hotel,
    getHotelErrorMessage: string,
    getHotelLoading: boolean,
}
const initialState: HotelInterface = {
    addHotelSuccessMessage: '',
    addHotelErrorMessage: '',
    addHotelLoading: false,

    getHotelsSuccessMessage: [],
    getHotelsErrorMessage: '',
    getHotelsLoading: false,

    getHotelSuccessMessage: emptyHotel,
    getHotelErrorMessage: '',
    getHotelLoading: false
}


export const hotelReducer = createReducer(
    initialState,


    // ADD TOUR-------------
    on(HotelsAction.addHotel, (state) => {
        return {
            ...state,
            addHotelSuccessMessage: '',
            addHotelErrorMessage: '',
            addHotelLoading: true
        }
    }),

    on(HotelsAction.addHotelSuccess, (state, action) => {
        return {
            ...state,
            addHotelSuccessMessage: action.response.message,
            addHotelErrorMessage: '',
            addHotelLoading: false
        }
    }),

    on(HotelsAction.addHotelFailure, (state, action) => {
        return {
            ...state,
            addHotelSuccessMessage: '',
            addHotelErrorMessage: action.message,
            addHotelLoading: false
        }
    }),


    // GET TOURS
    on(HotelsAction.getHotels, (state) => {
        return {
            ...state,
            getHotelsSuccessMessage: [],
            getHotelsErrorMessage: '',
            getHotelsLoading: true
        }
    }),

    on(HotelsAction.getHotelsSuccess, (state, { hotels }) => {
        return {
            ...state,
            getHotelsSuccessMessage: hotels,
            getHotelsErrorMessage: '',
            getHotelsLoading: false
        }
    }),

    on(HotelsAction.getHotelsFailure, (state, action) => {
        return {
            ...state,
            getHotelsSuccessMessage: [],
            getHotelsErrorMessage: action.message,
            getHotelsLoading: false
        }
    }),


    // GET TOUR
    on(HotelsAction.getHotel, (state) => {
        return {
            ...state,
            getHotelSuccessMessage: emptyHotel,
            getHotelErrorMessage: '',
            getHotelLoading: true
        }
    }),

    on(HotelsAction.getHotelSuccess, (state, action) => {
        return {
            ...state,
            getHotelSuccessMessage: action.hotel,
            getHotelErrorMessage: '',
            getHotelLoading: false
        }
    }),

    on(HotelsAction.getHotelFailure, (state, action) => {
        return {
            ...state,
            getHotelSuccessMessage: emptyHotel,
            getHotelErrorMessage: action.message,
            getHotelLoading: false
        }
    }),

    //Update hotel
    on(HotelsAction.updateHotel, (state) => {
        return {
            ...state,
            updateHotelSuccessMessage: emptyHotel,
            updateHotelErrorMessage: '',
            updateHotelLoading: true
        }
    }),

    on(HotelsAction.updateHotelSuccess, (state, action) => {
        return {
            ...state,
            updateHotelSuccessMessage: action.response.message,
            updateHotelErrorMessage: '',
            updateHotelLoading: false
        }
    }),

    on(HotelsAction.updateHotelFailure, (state, action) => {
        return {
            ...state,
            updateHotelSuccessMessage: emptyHotel,
            updateHotelErrorMessage: action.message,
            updateHotelLoading: false
        }
    }),

    //delete hotel

    on(HotelsAction.deleteHotel, (state) => {
        return {
            ...state,
            deleteHotelSuccessMessage: '',
            deleteHotelErrorMessage: '',
            deleteHotelLoading: true
        }
    }),

    on(HotelsAction.deleteHotelSuccess, (state, action) => {
        return {
            ...state,
            deleteHotelSuccessMessage: action.response.message,
            deleteHotelErrorMessage: '',
            deleteHotelLoading: false
        }
    }),
    
    on(HotelsAction.deleteHotelFailure, (state, action) => {
        return {
            ...state,
            deleteHotelSuccessMessage: '',
            deleteHotelErrorMessage: action.message,
            deleteHotelLoading: false
        }
    }),
)