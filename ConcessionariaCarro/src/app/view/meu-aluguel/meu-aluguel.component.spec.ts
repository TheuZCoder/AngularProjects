import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuAluguelComponent } from './meu-aluguel.component';

describe('MeuAluguelComponent', () => {
  let component: MeuAluguelComponent;
  let fixture: ComponentFixture<MeuAluguelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuAluguelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeuAluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
