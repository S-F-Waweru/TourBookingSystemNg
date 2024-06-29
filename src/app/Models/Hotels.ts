export interface Hotel {
    Id :string,
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