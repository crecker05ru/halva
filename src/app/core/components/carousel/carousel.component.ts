import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{
@Input() images = ['']
currentImageIndex = 0
slides: NodeListOf<Element> | undefined
carouselSecuance: null | number | unknown = null

ngOnInit(): void {
  const retry = new Promise((resolve => {
    let timerId
    let slides
    const querySelectorAgain = () => {
      slides = document.querySelectorAll(".carousel__image-wrapper");
      if(slides && slides.length > 0){
        timerId = null
        console.log('slides',slides)
        resolve(slides as NodeListOf<Element>)
      } else {
        console.log('else slides',slides)
        timerId = null
        timerId = setTimeout(() => {
          querySelectorAgain()
        }, (500));
      } 
    }
    querySelectorAgain()
  }))
  retry.then((data ) => {
    this.slides = data as NodeListOf<Element>;
    console.log('this.slides',this.slides)
    this.slides.forEach((slide, indx) => {
      (slide as HTMLElement).style.transform = `translateX(${indx * 100}%)`;
    });
    this.startSecuance()
  })

}
startSecuance(){
  this.carouselSecuance = setInterval(() => {
    if(this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++
      this.slides?.forEach((slide, indx) => {
        (slide as HTMLElement).style.transform = `translateX(${100 * (indx - this.currentImageIndex)}%)`;
      });
    } else {
      this.currentImageIndex = 0
      this.slides?.forEach((slide, indx) => {
        (slide as HTMLElement).style.transform = `translateX(${100 * (indx - this.currentImageIndex)}%)`;
      });
    }
  },3000)
}
nextSlide() {
  clearInterval(this.carouselSecuance as number)
  if(this.currentImageIndex < this.images.length - 1) {
    this.currentImageIndex++
    this.slides?.forEach((slide, indx) => {
      (slide as HTMLElement).style.transform = `translateX(${100 * (indx - this.currentImageIndex)}%)`;
    });
  } else {
    this.currentImageIndex = 0
    this.slides?.forEach((slide, indx) => {
      (slide as HTMLElement).style.transform = `translateX(${100 * (indx - this.currentImageIndex)}%)`;
    });
  }

}
prevSlide() {
  clearInterval(this.carouselSecuance as number)
  if(this.currentImageIndex > 0){
    this.currentImageIndex--
    this.slides?.forEach((slide, indx) => {
      (slide as HTMLElement).style.transform = `translateX(${100 * (indx - this.currentImageIndex)}%)`;
    });
  } else {
    this.currentImageIndex = this.images.length - 1
    this.slides?.forEach((slide, indx) => {
      (slide as HTMLElement).style.transform = `translateX(${100 * (indx - this.currentImageIndex)}%)`;
    });
  }

}
}
