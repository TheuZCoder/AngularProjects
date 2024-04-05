import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPizzasComponent } from './cadastro-pizzas.component';

describe('CadastroPizzasComponent', () => {
  let component: CadastroPizzasComponent;
  let fixture: ComponentFixture<CadastroPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPizzasComponent]
    });
    fixture = TestBed.createComponent(CadastroPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
