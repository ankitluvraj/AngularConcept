//receives the data from reducer and handovers to component


import { createFeatureSelector, createSelector } from '@ngrx/store';
import { initialStateI } from '../reducer/product.reducer';

const obj = createFeatureSelector<initialStateI>('products');
//here allProducts() will call the component.
export const allProducts = createSelector(obj, (state: initialStateI) => {
  return state;
});
