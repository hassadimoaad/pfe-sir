import { TestBed } from '@angular/core/testing';

import { TaxIrService } from './tax-ir.service';

describe('TaxIrService', () => {
  let service: TaxIrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxIrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
