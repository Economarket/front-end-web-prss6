export interface Login {
  email: String;
  password: String;
}

export interface Token {
  token: string;
}

export interface User {
  name: String;
  password: String;
  email: String;
  experience: Number;
}
export interface Category {
  name: String;
  searchName: String;
  product: Product[];
}

export interface Brand {
  searchName: String;
  brandName: String;
  product: Product[];
}

export interface Product {
  name: String;
  price: Number;
  brand: Brand[];
  unity: Number;
  category: Category[];
}