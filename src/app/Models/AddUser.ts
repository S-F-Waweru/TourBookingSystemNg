export interface Adduser {
    Name: string
    Email: string
    Password: string
}
export interface RegisterResponse {
    message: string
}
export interface LoginReq {
    Email: string
    Password: string
}
export interface LoginResponse {
    message: string
    token: string
    role: string
    userId: string
}

export interface User {
    Id: string,
    Name: string,
    Email: string,
    Password: string,
    isEmailSent: number,
    isDeleted: number
}

export interface UserReq{
    message :string
}
