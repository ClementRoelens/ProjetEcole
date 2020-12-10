import { TestBed } from '@angular/core/testing';

import { CantiniereAPIService } from './cantiniere-api.service';

describe('CantiniereAPIService', () => {
  let service: CantiniereAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantiniereAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
