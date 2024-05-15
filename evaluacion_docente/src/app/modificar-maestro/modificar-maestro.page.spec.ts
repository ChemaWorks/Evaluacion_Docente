import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarMaestroPage } from './modificar-maestro.page';

describe('ModificarMaestroPage', () => {
  let component: ModificarMaestroPage;
  let fixture: ComponentFixture<ModificarMaestroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
