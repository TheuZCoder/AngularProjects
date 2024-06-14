import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMaisAlugouComponent } from './cliente-mais-alugou.component';

describe('ClienteMaisAlugouComponent', () => {
  let component: ClienteMaisAlugouComponent;
  let fixture: ComponentFixture<ClienteMaisAlugouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteMaisAlugouComponent]
    });
    fixture = TestBed.createComponent(ClienteMaisAlugouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
