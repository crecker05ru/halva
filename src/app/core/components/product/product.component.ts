import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() productData: undefined | Product
}
