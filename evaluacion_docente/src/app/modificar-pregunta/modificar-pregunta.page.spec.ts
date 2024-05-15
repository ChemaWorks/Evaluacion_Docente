import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPreguntaPage } from './modificar-pregunta.page';

describe('ModificarPreguntaPage', () => {
  let component: ModificarPreguntaPage;
  let fixture: ComponentFixture<ModificarPreguntaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPreguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
