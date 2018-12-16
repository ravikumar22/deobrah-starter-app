import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  pageTitle: string;
  products: IProduct[];
  imageWidth: number;
  imageMargin: number;
  showImage: boolean;
  filteredProducts: IProduct[] = [];
  _productService: ProductService;

  constructor(public productService: ProductService) {
    this.pageTitle = 'Product list';
    this._productService = productService;
    this.imageWidth = 50;
    this.imageMargin = 2;
    this.showImage = false;
  }

  _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  ngOnInit() {
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  bindratingClick(message: string): void {
    this.pageTitle = `Product List ${message}`;
  }
}
