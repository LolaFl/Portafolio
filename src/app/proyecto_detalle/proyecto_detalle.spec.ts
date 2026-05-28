import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDetalle } from './proyecto_detalle';

describe('ProtectoDetalle', () => {
  let component: ProyectoDetalle;
  let fixture: ComponentFixture<ProyectoDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectoDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
