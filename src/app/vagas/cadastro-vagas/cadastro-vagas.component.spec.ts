import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVagasComponent } from './cadastro-vagas.component';

describe('CadastroVagasComponent', () => {
  let component: CadastroVagasComponent;
  let fixture: ComponentFixture<CadastroVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
