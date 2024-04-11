import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPizzasComponent } from './editar-pizzas.component';

describe('EditarPizzasComponent', () => {
  let component: EditarPizzasComponent;
  let fixture: ComponentFixture<EditarPizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPizzasComponent]
    });
    fixture = TestBed.createComponent(EditarPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
