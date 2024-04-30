import { TestBed } from '@angular/core/testing';

import { AddBillService } from './add-bill.service';

describe('AddBillService', () => {
  let service: AddBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
