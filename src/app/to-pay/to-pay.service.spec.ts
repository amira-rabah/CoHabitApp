import { TestBed } from '@angular/core/testing';

import { ToPayService } from '../to-pay.service';

describe('ToPayService', () => {
  let service: ToPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
