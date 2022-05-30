import UserService from "./UserService";

export interface Category {
  products: Product[];
  name: string;
}
export interface Product {
  categories: string[];
  description: string;
  likes: number;
  priceWithDiscount: number;
  _id: string;
  price: number;
  name: string;
}
export interface ProductsByCategories {
  data: Category[];
}
export interface NewProducts {
  data: Product[];
}
interface Response {
  productsByCategories: ProductsByCategories;
  newProducts: NewProducts;
}

export const getMainResources = async () => {
  try {
    const newProducts: NewProducts = await UserService.get("showNewProducts");
    const productsByCategories: ProductsByCategories = await UserService.get(
      "showProductsMainPage"
    );
    return { newProducts, productsByCategories };
  } catch (e: any) {
    return e.message;
  }
};
