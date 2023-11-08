import { TestBed } from '@angular/core/testing';

import { ServicenextpgService } from './servicenextpg.service';

describe('ServicenextpgService', () => {
  let service: ServicenextpgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicenextpgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
