import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresComponent } from './valores.component';

describe('ValoresComponent', () => {
  let component: ValoresComponent;
  let fixture: ComponentFixture<ValoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValoresComponent]
    });
    fixture = TestBed.createComponent(ValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
