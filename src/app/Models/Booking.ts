export interface Booking {
    Id: string,
    UserId: string,
    TourId: string,
    HotelId: string,
    BookingDate: Date
}

export interface BookingReq {
    TourId: string,
    HotelId: string,
    BookingDate: Date
}

export interface BookingResponse { message :string }