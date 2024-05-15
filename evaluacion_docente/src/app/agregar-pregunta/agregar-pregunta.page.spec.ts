import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPreguntaPage } from './agregar-pregunta.page';

describe('AgregarPreguntaPage', () => {
  let component: AgregarPreguntaPage;
  let fixture: ComponentFixture<AgregarPreguntaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPreguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
