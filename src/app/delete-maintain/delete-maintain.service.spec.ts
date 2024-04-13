import { TestBed } from '@angular/core/testing';

import { DeleteMaintainService } from './delete-maintain.service';

describe('DeleteMaintainService', () => {
  let service: DeleteMaintainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteMaintainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
