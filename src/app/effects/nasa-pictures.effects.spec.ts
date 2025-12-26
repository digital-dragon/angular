import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NasaPicturesEffects } from './nasa-pictures.effects';

describe('NasaPicturesEffects', () => {
  let actions$: Observable<any>;
  let effects: NasaPicturesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NasaPicturesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NasaPicturesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
