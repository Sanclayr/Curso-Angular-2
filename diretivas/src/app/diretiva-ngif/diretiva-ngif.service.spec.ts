import { TestBed, inject } from '@angular/core/testing';

import { DiretivaNgifService } from './diretiva-ngif.service';

describe('DiretivaNgifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiretivaNgifService]
    });
  });

  it('should be created', inject([DiretivaNgifService], (service: DiretivaNgifService) => {
    expect(service).toBeTruthy();
  }));
});
