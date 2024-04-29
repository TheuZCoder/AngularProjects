import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner-destaques',
  templateUrl: './banner-destaques.component.html',
  styleUrls: ['./banner-destaques.component.css']
})
export class BannerDestaquesComponent implements OnInit{
  @ViewChild('carousel', { static: true })
  carousel!: ElementRef<HTMLDivElement>;
  interval: any;
  currentIndex = 0;

  images = [
    { image: 'assets/camping.jpg' },
    { image: 'assets/camping2.jpg' },
    { image: 'assets/camping3.jpg' }
  ];

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.carousel.nativeElement.scrollTo({
        left: this.carousel.nativeElement.clientWidth * this.currentIndex,
        behavior: 'smooth'
      });
    }, 3000); 
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
