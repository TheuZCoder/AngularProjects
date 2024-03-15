import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  @ViewChild('carousel', { static: true })
  carousel!: ElementRef<HTMLDivElement>;
  interval: any;
  currentIndex = 0;

  pizzas = [
    { image: 'assets/pizza1.jpg' },
    { image: 'assets/pizza2.jpg' },
    { image: 'assets/pizza3.jpg' }
  ];

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.pizzas.length;
      this.carousel.nativeElement.scrollTo({
        left: this.carousel.nativeElement.clientWidth * this.currentIndex,
        behavior: 'smooth'
      });
    }, 3000); // Altere o valor para ajustar o tempo de transição entre as fotos (em milissegundos)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
