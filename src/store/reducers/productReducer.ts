import {
  AppointsAction,
  AppointsActionsTypes,
  ProductsReducer,
} from "../../types/products";

const products: ProductsReducer = {
  newProducts: [],
  cart: [],
  mainResources: [],
  products: [],
  categories: [],
  selectedCategory: {},
  selectedProduct: {},
};

export const productsReducer = (
  state = products,
  action: AppointsAction
): ProductsReducer => {
  switch (action.type) {
    case AppointsActionsTypes.SET_MAIN_RESOURCES:
      return {
        ...state,
        newProducts: action.payload[0],
        mainResources: action.payload[1],
      };
    case AppointsActionsTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case AppointsActionsTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case AppointsActionsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case AppointsActionsTypes.SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case AppointsActionsTypes.SET_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    default:
      return state;
  }
};
