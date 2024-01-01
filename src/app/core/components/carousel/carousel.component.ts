import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
@Input() images = []
currentImageIndex = 0

nextSlide() {
  if(this.currentImageIndex < this.images.length)
  this.currentImageIndex++
}
prevSlide() {
  if(this.currentImageIndex > 0)
  this.currentImageIndex--
}
}
