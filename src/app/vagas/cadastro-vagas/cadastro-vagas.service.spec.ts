import { TestBed } from '@angular/core/testing';

import { CadastroVagasService } from './cadastro-vagas.service';

describe('CadastroVagasService', () => {
  let service: CadastroVagasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroVagasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
