export interface Tour {
    Id :number,
    Name :string
    Destination:string
    Description:string
    Price:number
}

export interface TourReq {
    Name :string
    Destination:string
    Description:string
    Price:number
}
export interface TourResponse{
    message :string
}