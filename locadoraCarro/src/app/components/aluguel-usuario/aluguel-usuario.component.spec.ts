import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelUsuarioComponent } from './aluguel-usuario.component';

describe('AluguelUsuarioComponent', () => {
  let component: AluguelUsuarioComponent;
  let fixture: ComponentFixture<AluguelUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AluguelUsuarioComponent]
    });
    fixture = TestBed.createComponent(AluguelUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
