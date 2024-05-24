import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelPainelComponent } from './aluguel-painel.component';

describe('AluguelPainelComponent', () => {
  let component: AluguelPainelComponent;
  let fixture: ComponentFixture<AluguelPainelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AluguelPainelComponent]
    });
    fixture = TestBed.createComponent(AluguelPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
