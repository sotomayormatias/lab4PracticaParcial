import { TestBed, inject } from '@angular/core/testing';

import { ServicioHeladoService } from './servicio-helado.service';

describe('ServicioHeladoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioHeladoService]
    });
  });

  it('should be created', inject([ServicioHeladoService], (service: ServicioHeladoService) => {
    expect(service).toBeTruthy();
  }));
});
