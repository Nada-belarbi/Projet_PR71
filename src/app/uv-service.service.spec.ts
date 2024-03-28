import { TestBed } from '@angular/core/testing';

import { UVService } from './uv-service.service';

describe('UvServiceService', () => {
  let service: UVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
