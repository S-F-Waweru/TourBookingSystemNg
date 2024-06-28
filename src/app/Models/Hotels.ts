export interface Hotel {
    Id :number,
    Name :string,
    Location : string,
    StarRating :number
}

export interface HotelReq {
    Name :string,
    Location : string,
    StarRating :number
}
export interface HotelResponse{
    message :string
}