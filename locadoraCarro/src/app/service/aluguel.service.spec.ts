import { TestBed } from '@angular/core/testing';

import { AluguelService } from './aluguel.service';

describe('AluguelService', () => {
  let service: AluguelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AluguelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
