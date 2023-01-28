import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../interfaces/product';
import {Subscription} from 'rxjs';
import {ProductsService} from '../../services/products.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  productsSub: Subscription;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.productsSub = this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    if (this.productsSub) {
      this.productsSub.unsubscribe();
    }
  }

  openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.postProduct(data));
  };


  postProduct(data: Product) {

    // @ts-ignore
    this.productsService.postProduct(data).subscribe(data => this.products.push(data));

  }
}
