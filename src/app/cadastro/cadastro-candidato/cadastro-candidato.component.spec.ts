import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCandidatoComponent } from './cadastro-candidato.component';

describe('CadastroCandidatoComponent', () => {
  let component: CadastroCandidatoComponent;
  let fixture: ComponentFixture<CadastroCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
