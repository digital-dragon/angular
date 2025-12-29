import { TestBed } from '@angular/core/testing';

import { PicturesStore } from './pictures.store';

describe('PicturesStore', () => {
  let service: PicturesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicturesStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
