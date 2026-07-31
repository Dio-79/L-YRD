export interface Product {
    productID: number;
    name: string;
    price: number;
}

export interface User{
    userID: number;
    name: string;
    email: string;
    passwords: string;
    phone: string;
}

export interface Customer extends User {
    customerId: number;
    address: string;
    loyaltypoints: number;
}