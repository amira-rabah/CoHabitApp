import { TestBed } from '@angular/core/testing';

import { EditProductServiceService } from './edit-product-service.service';

describe('EditProductServiceService', () => {
  let service: EditProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
