import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaTotalComponent } from './receita-total.component';

describe('ReceitaTotalComponent', () => {
  let component: ReceitaTotalComponent;
  let fixture: ComponentFixture<ReceitaTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitaTotalComponent]
    });
    fixture = TestBed.createComponent(ReceitaTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
