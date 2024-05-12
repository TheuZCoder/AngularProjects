import { TestBed } from '@angular/core/testing';

import { ComentariosServiceService } from './comentarios-service.service';

describe('ComentariosServiceService', () => {
  let service: ComentariosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentariosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
