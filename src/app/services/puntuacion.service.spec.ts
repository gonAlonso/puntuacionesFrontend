import { TestBed } from '@angular/core/testing';

import { PuntuacionService } from './puntuacion.service';

describe('PuntuacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuntuacionService = TestBed.get(PuntuacionService);
    expect(service).toBeTruthy();
  });
});
