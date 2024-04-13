import { TestBed } from '@angular/core/testing';

import { ViewMaintainService } from './view-maintain.service';

describe('ViewMaintainService', () => {
  let service: ViewMaintainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewMaintainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
