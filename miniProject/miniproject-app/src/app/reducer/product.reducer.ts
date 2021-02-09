

import { HttpErrorResponse } from '@angular/common/http';
import { ProductActions, ProductActionTypes } from '../actions/product.action';
import { Product } from '../model/product.model';

export interface initialStateI {
    // here we need to declare customer expectication.
    // customer expectitaion blue print we need to place
    // and also we need to spinner kind of concepts.
  loading: boolean;
  products: Product[];
  message: any;
}
//taking initial state
const initialState = {
  loading: false,//show the progress bar.
  products: [],
  message: '',
};
//export resucer.
export function productsReducer(
  state = initialState,
  action: ProductActions
): initialStateI {
  switch (action.type) {
    case ProductActionTypes.GetProducts:
      return {
        ...state,//maintain immutability.
        loading: false,
        products: [],
        message: '',
      };
    case ProductActionTypes.GetProductsSuccess:
      return {
        ...state,
        loading: true,
        products: action.payload,
        message: 'Products Loaded Successfully',
      };
    case ProductActionTypes.GetProductsFail:
      return {
        ...state,
        loading: true,
        products: [],
        message: action.error,
      };

    default:
      return state;
  }
}
