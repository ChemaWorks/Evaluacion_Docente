import { TestBed } from '@angular/core/testing';

import { PreguntaService } from './preguntas.service';

describe('PreguntasService', () => {
  let service: PreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
