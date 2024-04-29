import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComoChegarComponent } from './section-como-chegar.component';

describe('SectionComoChegarComponent', () => {
  let component: SectionComoChegarComponent;
  let fixture: ComponentFixture<SectionComoChegarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionComoChegarComponent]
    });
    fixture = TestBed.createComponent(SectionComoChegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
