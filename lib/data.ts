import { Product, Customer} from "@/types/models";

export const products: Product[] = [
    {
        productID: 1,
        name: "Oreo Cheesecake",
        price: 8,
    },
    {
        productID: 2,
        name: "Single Espresso",
        price: 4,
    },
    {
        productID: 3,
        name: "Strawberry Matcha",
        price: 9,
    },

];

export const customers: Customer[] = [
    {
        userID: 1,
        customerId: 1001,
        name: "Jordan Diaz",
        email: "jordan@example.com",
        passwords: "password123",
        phone: "403-555-0101",
        address: "123 Main St",
        loyaltypoints: 100,
    },
];

export function login(email: string, passwords: string): Customer | null {
  return customers.find((item) => item.email === email && item.passwords === passwords) ?? null;
}