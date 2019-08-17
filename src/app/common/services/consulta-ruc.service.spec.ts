import { TestBed } from '@angular/core/testing';

import { ConsultaRucService } from './consulta-ruc.service';

describe('ConsultaRucService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaRucService = TestBed.get(ConsultaRucService);
    expect(service).toBeTruthy();
  });
});
