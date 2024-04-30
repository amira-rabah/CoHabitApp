import { TestBed } from '@angular/core/testing';

import { EditBillService } from './edit-bill.service';

describe('EditBillService', () => {
  let service: EditBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
