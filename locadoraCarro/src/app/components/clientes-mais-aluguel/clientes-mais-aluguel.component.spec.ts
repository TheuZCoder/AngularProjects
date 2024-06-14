import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesMaisAluguelComponent } from './clientes-mais-aluguel.component';

describe('ClientesMaisAluguelComponent', () => {
  let component: ClientesMaisAluguelComponent;
  let fixture: ComponentFixture<ClientesMaisAluguelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesMaisAluguelComponent]
    });
    fixture = TestBed.createComponent(ClientesMaisAluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
