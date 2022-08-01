import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaCadastroComponent } from './escolha-cadastro.component';

describe('EscolhaCadastroComponent', () => {
  let component: EscolhaCadastroComponent;
  let fixture: ComponentFixture<EscolhaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
