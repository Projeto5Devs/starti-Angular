import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(){

    Swiper.use([Navigation, Pagination]);

  }

  ngOnInit(): void {


  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  })
}
}
