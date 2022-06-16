import { RootState } from "../store";
import { ThunkAction } from "redux-thunk";
import { UserAction } from "./users";

export enum AppointsActionsTypes {
  SET_MAIN_RESOURCES = "SET_MAIN_RESOURCES",
  SET_CATEGORIES = "SET_CATEGORIES",
  SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY",
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_PRODUCT = "SET_PRODUCT",
}

interface SetMainResources {
  type: AppointsActionsTypes.SET_MAIN_RESOURCES;
  payload: any[];
}
interface SetCategoriesAction {
  type: AppointsActionsTypes.SET_CATEGORIES;
  payload: any[];
}
interface SetProductsAction {
  type: AppointsActionsTypes.SET_PRODUCTS;
  payload: any[];
}
interface SetProductAction {
  type: AppointsActionsTypes.SET_PRODUCT;
  payload: any[];
}
interface SetSelectedCategoryAction {
  type: AppointsActionsTypes.SET_SELECTED_CATEGORY;
  payload: Category;
}

export interface AppointsReducer {
  newProducts: any[];
  mainResources: any[];
  products: any[];
  categories: any[];
  selectedCategory: Category;
  selectedProduct: any;
}

export type AppointsAction =
  | SetMainResources
  | SetCategoriesAction
  | SetSelectedCategoryAction
  | SetProductAction
  | SetProductsAction;

export interface List {
  _id?: string;
  user_id?: string;
  fio: string;
  doctor: string;
  date: string;
  complaint: string;
}

export interface Data {
  accessToken: string;
  refreshToken: string;
}
export interface Response {
  data: Data;
}
export interface Category {
  _id?: String;
  name?: String;
  createdAt?: Date | null;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppointsAction | UserAction
>;

export interface Product {
  categories: string[];
  createdAt: string;
  description: string;
  likes: number;
  name: string;
  price: number;
  priceWithDiscount: number;
  preview: string;
  images: string[];
  updatedAt: string;
  _id: string;
}
