import { TestBed } from '@angular/core/testing';

import { AddMaintainService } from './add-maintain.service';

describe('AddMaintainService', () => {
  let service: AddMaintainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMaintainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
