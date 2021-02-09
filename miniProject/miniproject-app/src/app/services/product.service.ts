//if you want to create the service then we need to go for injectable.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
    //providedIn: 'root' using this make the global service.
  providedIn: 'root',
})
export class productService {
    //inject http client 
    constructor(private http: HttpClient) { }
    
    //create one funcion to
    // how to make asynchronous call using 'observable'
    getAllProducts(): Observable<Product[]> {
      //how to make rest api call.
        return this.http.get<Product[]>(`http://localhost:8080/products`);
        //which response want to resive <product[]>  
  }
}
