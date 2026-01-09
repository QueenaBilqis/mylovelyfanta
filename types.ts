export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'Classic' | 'Best Seller' | 'Sweet' | 'Exotic';
    color: string;
    bgColor: string;
    accentColor: string;
}

export interface CartItem extends Product {
    quantity: number;
    size: 'Small' | 'Medium' | 'Large';
}