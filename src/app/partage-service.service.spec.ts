import { TestBed } from '@angular/core/testing';

import { PartageService } from './partage-service.service';

describe('PartageServiceService', () => {
  let service: PartageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
