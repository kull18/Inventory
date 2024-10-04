import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVentaComponent } from './employee-venta.component';

describe('EmployeeVentaComponent', () => {
  let component: EmployeeVentaComponent;
  let fixture: ComponentFixture<EmployeeVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeVentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
