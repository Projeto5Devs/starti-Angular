import { TestBed } from '@angular/core/testing';

import { ListaVagasService } from './lista-vagas.service';

describe('ListaVagasService', () => {
  let service: ListaVagasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaVagasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
