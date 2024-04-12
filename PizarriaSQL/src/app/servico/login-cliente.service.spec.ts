import { TestBed } from '@angular/core/testing';

import { LoginClienteService } from './login-cliente.service';

describe('LoginClienteService', () => {
  let service: LoginClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
