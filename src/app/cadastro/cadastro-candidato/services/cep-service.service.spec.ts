import { TestBed } from '@angular/core/testing';

import { CepServiceService } from './cep-service.service';

describe('CepServiceService', () => {
  let service: CepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
