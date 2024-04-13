import { TestBed } from '@angular/core/testing';

import { EditMaintainService } from './edit-maintain.service';

describe('EditMaintainService', () => {
  let service: EditMaintainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditMaintainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
