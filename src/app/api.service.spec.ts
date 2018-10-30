import { TestBed } from '@angular/core/testing';

import { apiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: apiService = TestBed.get(apiService);
    expect(service).toBeTruthy();
  });
});
