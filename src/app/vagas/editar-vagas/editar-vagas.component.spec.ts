import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVagasComponent } from './editar-vagas.component';

describe('EditarVagasComponent', () => {
  let component: EditarVagasComponent;
  let fixture: ComponentFixture<EditarVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
