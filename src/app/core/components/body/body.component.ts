import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import products from '../../../../assets/db/products'
import { Products } from '../../../shared/product';
import images from '../../../../assets/db/images'
import { CarouselComponent } from '../carousel/carousel.component';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ProductComponent,CarouselComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  data = products
  images = images
}
