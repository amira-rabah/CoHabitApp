import { TestBed } from '@angular/core/testing';

import { BillTypesServiceService } from './bill-types-service.service';

describe('BillTypesServiceService', () => {
  let service: BillTypesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillTypesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
