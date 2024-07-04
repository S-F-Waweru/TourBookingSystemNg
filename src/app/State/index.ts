import { AuthInterface } from "./Reducers/auth.reducers";
import { TourInterface } from "./Reducers/tours.reducers";

export interface AppState {
    auth : AuthInterface
    tours: TourInterface
}