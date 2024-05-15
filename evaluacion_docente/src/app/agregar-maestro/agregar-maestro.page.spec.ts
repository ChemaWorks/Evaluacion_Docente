import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarMaestroPage } from './agregar-maestro.page';

describe('AgregarMaestroPage', () => {
  let component: AgregarMaestroPage;
  let fixture: ComponentFixture<AgregarMaestroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
