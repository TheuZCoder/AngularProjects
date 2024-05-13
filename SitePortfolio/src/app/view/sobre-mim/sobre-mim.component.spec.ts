import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMimComponent } from './sobre-mim.component';

describe('SobreMimComponent', () => {
  let component: SobreMimComponent;
  let fixture: ComponentFixture<SobreMimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreMimComponent]
    });
    fixture = TestBed.createComponent(SobreMimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
