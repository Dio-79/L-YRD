import { Product, Customer} from "@/types/models";

export const products: Product[] = [
    {
        productID: 1,
        name: "Strawberry Matcha",
        price: 9,
    },
    {
        productID: 2,
        name: "Single espresso",
        price: 4,
    },
    {
        productID: 3,
        name: "Oreo Cheesecake",
        price: 8,
    },
    {
        productID: 4,
        name: "fruit salad",
        price: 9,
    },
    {
        productID: 5,
        name: "Lotus Cheesecake",
        price: 8,
    },
    {
        productID: 6,
        name: "Kinder Bueno",
        price: 9,
    },
    {
        productID: 7,
        name: "Tiramisu",
        price: 9,
    },
    {
        productID: 8,
        name: "Double Espresso",
        price: 4,
    },
    {
        productID: 9,
        name: "Classic Bundle",
        price: 30,
    },
    {
        productID: 10,
        name: "Espresso Duo",
        price: 6,
    },
    {
        productID: 11,
        name: "Espresso bundle",
        price: 14,
    }

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