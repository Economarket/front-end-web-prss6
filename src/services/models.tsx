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
  id?: number;
  brandName?: String;
  searchName?: String;
}

export interface Category {
  id: number;
  uuid: string;
  name: string;
  searchName: string;
}

export interface Market {
  id: number;
  uuid: string;
  name: string;
  description?: string;
  logo?: string;
  address?: Address;
  schedules?: Schedule[];
  // products?: Product[];
}

export interface Product {
  id?: number;
  name: string;
  searchName?: string;
  price: number;
  brand: Brand;
  category: Category;
  unity: string;
  markets?: Market[] | null;
  greaterThanLastPrice?: boolean | null;
}

export interface ProductPost {
  id?: number;
  name: string;
  searchName?: string;
  price: number;
  brand: { id: number };
  category: { id: number };
  unity: string;
  markets: { id: number }[];
  greaterThanLastPrice?: boolean | null;
}
export interface Schedule {
  oppeningHour: DateLocale;
  closingHour: DateLocale;
  dayOfWeek: Number;
  market: Market;
}

export interface Token {
  access_token: string;
  refresh_token: string;
}

export interface RefreshToken {
  access_token: string;
}

export interface User {
  id: number;
  uuid?: string;
  name: string;
  email: string;
  permissions?: Permission[];
  address?: Address;
}

export interface UserLogin {
  email: String;
  senha: String;
}

export interface Permission {}

export interface RefreshToken {}

export interface Localization {
  locateX: number;
  locateY: number;
  // locate - latitude
  // locate - longitude
}

export interface Unity {
  abbreviation?: string;
  description?: string;
}
export interface ProductList {
  id?: number;
  product: Product;
  quantity: number;
}

export interface ShoppingList {
  id?: number;
  name: string;
  productList: ProductList[];
  totalPrice?: number;
  user?: {
    id: number;
  };
}
