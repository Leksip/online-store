import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, EMPTY, Observable} from 'rxjs';
import {Product} from '../interfaces/product';
import {ProductsService} from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this.productService.getProduct(route.params?.['id']).pipe(
      catchError(
        () => {
          this.router.navigate(['products']);
          return EMPTY;
        }
      )
    );
  }
}
