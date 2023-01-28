import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../interfaces/product';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productSub: Subscription;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.productSub = this.route.data.subscribe(product => {
      this.product = product['product'];
    });
  }

}
