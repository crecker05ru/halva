import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  constructor(protected modalService: ModalService){}
  ngOnInit(): void {
    (async () => {
      // let ya = await fetch('https://api-maps.yandex.ru/2.1/?apikey=bf184f9a-71f3-4da7-8c2a-1a18cd007409&lang=ru_RU')
      // let resp = await fetch('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
      // let ya = await resp.json()

    // console.log('ya',resp)

    })()
    
  }

  openMapModal(id: string){
    this.modalService.open(id)
  }
}
