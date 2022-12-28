import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePrestamoFormComponent } from './detalle-prestamo-form.component';

describe('DetallePrestamoFormComponent', () => {
  let component: DetallePrestamoFormComponent;
  let fixture: ComponentFixture<DetallePrestamoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePrestamoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePrestamoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
