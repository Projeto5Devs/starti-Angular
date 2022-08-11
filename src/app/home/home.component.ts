import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swiper, { Navigation, Pagination } from 'swiper';
import { ListaVagasService } from '../vagas/lista-vagas/lista-vagas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formulario: FormGroup;
  vagas: []
  imagens: []

  constructor(private listaVagas: ListaVagasService, private formBuilder: FormBuilder){

    this.formulario = this.formBuilder.group({
      vagas: ['']
    });

    const observable = this.listaVagas.getEmbedded()
    observable.subscribe( vagas => {
    this.vagas =  vagas._embedded.vagaVOList;
    } );

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
