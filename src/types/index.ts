export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  cbdPercentage?: number;
  thcPercentage?: number;
  images: string[];
  description: string;
  isNew?: boolean;
  isPromo?: boolean;
  promoPrice?: number;
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  orders: Order[];
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
  items: CartItem[];
}
