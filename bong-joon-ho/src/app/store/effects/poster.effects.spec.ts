import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PosterEffects } from './poster.effects';

describe('PosterEffects', () => {
  let actions$: Observable<any>;
  let effects: PosterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PosterEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PosterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
