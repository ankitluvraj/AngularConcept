import { Component, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { initialStateI } from './reducer/product.reducer';
import * as allActions from '.';
import { allProducts } from './selector/product.selector';
import { Product } from './model/product.model';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[];
  loading: boolean;
  message: any;
  //below we need to convert normal data to material table data using matableDataSource.
  dataSource: MatTableDataSource<any>;
  //below we need to display all the products then we need to store one variable and this veriable we need to print it
  displayedColumns: string[] = [
    `_id`,
    `p_id`,
    `p_name`,
    `p_cost`,
    `images`,
  ];

 // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //if i want to perform dispatch or subscription operation. then we need to create objcet to the store
  constructor(
    private store: Store<initialStateI>,
    private spinner: SpinnerVisibilityService //this is used to show the spinner.
  ) {}

  ngOnInit() {
    //pass all products is nothing but allActions
    //this process is called dispach process.
    this.store.dispatch(new allActions.GetProducts());
//when to show the spinner , loading time. 
     if (this.loading) {
       this.spinner.show();
     }
    const products$ = this.store.pipe(select(allProducts));

    //this is called distraction process.
    products$.subscribe((res) => {
      //this product is final so i want to display the products in html page.
      //and also products is final data so this data i want to cinvert to material table sutable data see in html
      this.products = res.products;
      this.loading = res.loading;
      this.message = res.message;

      console.log(this.products, this.loading, this.message);//this process is called 
      //below we need to convert normal data to material table data.
       this.dataSource = new MatTableDataSource(this.products);
       //this.dataSource.paginator = this.paginator;
    });
  }
}
