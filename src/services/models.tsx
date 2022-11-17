import { DateLocale } from "yup/lib/locale";

export interface Address {
  id: number;
  cep: string;
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
}

export interface Brand {
  searchName?: String;
  brandName: String;
  product?: Product[];
}

export interface Category {
  id: number;
  uuid: string;
  name: string;
  searchName: string;
  // product?: Product[];
}

export interface Market {
  id: number;
  uuid: string;
  locateX?: string;
  locateY?: string;
  name: string;
  description?: string;
  logo?: string;
  address?: Address;
  schedules?: Schedule[];
  products?: Product[];
}

export interface Product {
  name: String;
  searchName?: String;
  price: Number;
  brand: Brand;
  category: Category;
  unity: Number;
  markets: Market[];
}

export interface ProductList {
  uuid?: String;
  shoppingList: ShoppingList;
  product: Product;
  quantity: Number;
}

export interface Schedule {
  oppeningHour: DateLocale;
  closingHour: DateLocale;
  dayOfWeek: Number;
  market: Market;
}

export interface ShoppingList {
  uuid?: String;
  user: User;
  productList?: ProductList[];
}

export interface Token {
  access_token: string;
}

export interface User {
  uuid?: String;
  name: String;
  password: String;
  email: String;
  experience?: Number;
  shoppingLists?: ShoppingList[];
  permissions?: Permission[];
  address?: Address;
  tokens: RefreshToken[];
}

export interface UserLogin {
  email: String;
  senha: String;
}

export interface Permission {}

export interface RefreshToken {}

export interface Location {
  lat: number;
  long: number;
}
