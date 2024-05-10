import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosDisponiveisComponent } from './carros-disponiveis.component';

describe('CarrosDisponiveisComponent', () => {
  let component: CarrosDisponiveisComponent;
  let fixture: ComponentFixture<CarrosDisponiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosDisponiveisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
