import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAluguelComponent } from './editar-aluguel.component';

describe('EditarAluguelComponent', () => {
  let component: EditarAluguelComponent;
  let fixture: ComponentFixture<EditarAluguelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAluguelComponent]
    });
    fixture = TestBed.createComponent(EditarAluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
