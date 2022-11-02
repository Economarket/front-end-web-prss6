import { DateLocale } from "yup/lib/locale";

export interface Address {
  cep: String;
  street: String;
  number: String;
  complement?: String;
  district: String;
  city: String;
  state: String;
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
  uuid?: String;
  locateX: String;
  locateY: String;
  name: String;
  description?: String;
  logo?: String;
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
