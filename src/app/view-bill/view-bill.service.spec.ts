import { TestBed } from '@angular/core/testing';

import { ViewBillService } from './view-bill.service';

describe('ViewBillService', () => {
  let service: ViewBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
