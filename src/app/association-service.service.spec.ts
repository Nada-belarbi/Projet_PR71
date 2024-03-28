import { TestBed } from '@angular/core/testing';

import { AssociationService } from './association-service.service';

describe('AssociationServiceService', () => {
  let service: AssociationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
