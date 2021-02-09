// if we create action we need to
//depend on two people 1) enum 2) class
//definign our applicaiton requrenment.
//thinking power is our action


import { Action } from "@ngrx/store";
import { Product } from "../model/products.model";
import { HttpErrorResponse} from "@angular/common/http"
import { type } from "os";



//create enum
export enum ProductActionTypes{
    GetProducts = 'Get Products',
    GetProductsSuccess = 'Get Products Success',
    GetProductsFail = 'Get Products Fail'
};

//create a class
//Action :-if you want to implement our vision then we need to go for 
// one predefine interface nothing but Aciton

//GetProducts is my first vision
export class GetProducts implements Action {
    public readonly type = typeof ProductActionTypes.GetProducts;
};
//GetProducts is my second vision
export class GetProductsSuccess implements Action{
    //if getting success then you are getting the data form server
    public readonly type = typeof ProductActionTypes.GetProductsSuccess;
    //so using constructor we need to catch the data
   public constructor(public payload: Product[]) {
      //Product[] is model data

    };
};

export class GetProductsFail implements Action{
    public readonly type = typeof ProductActionTypes.GetProductsFail;
    //if network call Fail
     public constructor(public error:HttpErrorResponse){}
};



