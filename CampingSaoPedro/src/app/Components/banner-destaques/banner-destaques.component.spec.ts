import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDestaquesComponent } from './banner-destaques.component';

describe('BannerDestaquesComponent', () => {
  let component: BannerDestaquesComponent;
  let fixture: ComponentFixture<BannerDestaquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerDestaquesComponent]
    });
    fixture = TestBed.createComponent(BannerDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
