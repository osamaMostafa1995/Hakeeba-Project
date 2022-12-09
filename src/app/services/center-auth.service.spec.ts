import { TestBed } from '@angular/core/testing';

import { CenterAuthService } from './center-auth.service';

describe('CenterAuthService', () => {
  let service: CenterAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenterAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
