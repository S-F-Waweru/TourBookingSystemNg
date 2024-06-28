export interface Adduser {
    Name :string
    Email:string
    Password:string
}
export interface RegisterResponse {
    message :string
}
export interface LoginReq {
    Email :string
    Password :string
}
export interface LoginResponse {
    message :string
    token :string
}