import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import products from '../../../../assets/db/products'
import { Products } from '../../../shared/product';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  data = products
}
