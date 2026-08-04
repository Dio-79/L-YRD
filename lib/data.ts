import { Product, Customer} from "@/types/models";

export const products: Product[] = [
    {
        productID: 1,
        name: "Strawberry Matcha",
        price: 9,
        tag: "LIMITED",
        description: "Vibrant, creamy fusion of earthy matcha and sweet strawberry.",
    },
    {
        productID: 2,
        name: "Single espresso",
        price: 4,
        tag: "CLASSIC",
        description: "Compact shot of rich, bold coffee sealed for freshness and ready to enjoy anywhere.",
    },
    {
        productID: 3,
        name: "Oreo Cheesecake",
        price: 8,
        tag: "POPULAR",
        description: "Creamy desert that blends cheesecake with crushed Oreos.",
    },
    {
        productID: 4,
        name: "fruit salad",
        price: 9,
        tag: "",
        description: "Bright, creamy cheesecake layered with mixed fresh fruits for a refreshing bite.",
    },
    {
        productID: 5,
        name: "Lotus Cheesecake",
        price: 8,
        tag: "",
        description: "Lotus-infused cheesecake for a sweet, deeply comforting flavor.",
    },
    {
        productID: 6,
        name: "Kinder Bueno",
        price: 9,
        tag: "",
        description: "Hazelnut-cream cheesecake blended with chocolate wafers for Kinder Bueno lovers.",
    },
    {
        productID: 7,
        name: "Tiramisu",
        price: 9,
        tag: "",
        description: "Infused with espresso and cocoa, capturing the rich indulgence of classic tiramisu.",
    },
    {
        productID: 8,
        name: "Double Espresso",
        price: 4,
        tag: "",
        description: "Bold, concentrated burst of rich coffee, with the grab-and-go convenience.",
    },
    {
        productID: 9,
        name: "Classic Bundle",
        price: 30,
        tag: "",
        description: "Curated 4-pack including Tiramisu, Lotus, Oreo, and Fruit Salad cheesecakes.",
    },
    {
        productID: 10,
        name: "Espresso Duo",
        price: 6,
        tag: "",
        description: "Single and double duo offers a balanced caffeine pairing.",
    },
    {
        productID: 11,
        name: "Espresso bundle",
        price: 14,
        tag: "",
        description: "Mixed espresso bundle for four. Or four for yourself.",
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