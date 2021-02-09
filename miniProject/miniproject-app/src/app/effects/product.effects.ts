//if you want to create the effects then we need to go for injectable.

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { productService } from '../services/product.service';
import { catchError, mergeMap, map } from 'rxjs/operators';
import * as allActions from '../.';
import { Product } from '../model/product.model';

//how to use the injectable using @injectable.
@Injectable({
    //how to make global service see below using this we can make global service
  providedIn: 'root',
})
    
    //export the service
export class productEffects {
    //IF YOU want to create the actions then we need to create the acions.
  constructor(public actions: Actions, public service: productService) {}

    //if you want to implement the acions then we need to go for injectable @Effects()
    @Effect()
      //if you want to make asynchronous call then we need to go for below.,
    public getProducts: Observable<Action> = this.actions.pipe(
      //if you want to start the execution then we need to go for pipe() function
        //if you want to execute non network call then we need to go for onType() funciton.
        ofType(allActions.ProductActionTypes.GetProducts),
        //if you want to make network call then we need to go for mergeMap() function.
      mergeMap(() =>
        //to catch the response one function is their map(),to catch the errr response one more funcion 
          //catchErr() functions.
      this.service.getAllProducts().pipe(
        map((posRes: Product[]) => {
          return new allActions.GetProductsSuccess(posRes);
        }),
        catchError((error) => of(new allActions.GetProductsFail(error)))
      )
    )
  );
}
