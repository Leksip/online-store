import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  url: string = 'http://localhost:3000/products';

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}
