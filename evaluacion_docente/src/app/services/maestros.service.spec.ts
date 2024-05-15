import { TestBed } from '@angular/core/testing';

import { MaestroService } from './maestros.service';

describe('MaestrosService', () => {
  let service: MaestroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaestroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
