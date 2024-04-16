import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraProdutoComponent } from './compra-produto.component';

describe('CompraProdutoComponent', () => {
  let component: CompraProdutoComponent;
  let fixture: ComponentFixture<CompraProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompraProdutoComponent]
    });
    fixture = TestBed.createComponent(CompraProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
