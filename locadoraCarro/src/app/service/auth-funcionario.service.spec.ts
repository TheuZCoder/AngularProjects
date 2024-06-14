import { TestBed } from '@angular/core/testing';

import { AuthFuncionarioService } from './auth-funcionario.service';

describe('AuthFuncionarioService', () => {
  let service: AuthFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
