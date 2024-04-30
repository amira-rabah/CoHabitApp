import { TestBed } from '@angular/core/testing';

import { DeleteBillService } from './delete-bill.service';

describe('DeleteBillService', () => {
  let service: DeleteBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
