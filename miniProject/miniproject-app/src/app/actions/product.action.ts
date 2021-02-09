import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Product } from '../model/product.model';
export enum ProductActionTypes {
    //what ever task we have we need to divide into three partitions

  GetProducts = '[Product] Get Products',
  GetProductsSuccess = '[Product] Get Products Success',
  GetProductsFail = '[Product] Get Prosucts Fail',
}
//based on your vision we need to create three classes

export class GetProducts implements Action {
  public readonly type = ProductActionTypes.GetProducts;
}

export class GetProductsSuccess implements Action {
  public readonly type = ProductActionTypes.GetProductsSuccess;
  public constructor(public payload: Product[]) {}
}

export class GetProductsFail implements Action {
  public readonly type = ProductActionTypes.GetProductsFail;
  public constructor(public error: HttpErrorResponse) {}
}
// we need to export all the classes
export type ProductActions = GetProducts | GetProductsSuccess | GetProductsFail;
//here so many export are there to handl this we need to create on index.ts file inside app module
