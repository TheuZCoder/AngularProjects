import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosNaoAlugadosComponent } from './carros-nao-alugados.component';

describe('CarrosNaoAlugadosComponent', () => {
  let component: CarrosNaoAlugadosComponent;
  let fixture: ComponentFixture<CarrosNaoAlugadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosNaoAlugadosComponent]
    });
    fixture = TestBed.createComponent(CarrosNaoAlugadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
