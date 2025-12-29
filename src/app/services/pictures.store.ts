import { Injectable, inject } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, pipe, tap } from 'rxjs';

import { Api } from './api';
import { Picture } from '../types/picture';

const DEFAULT_PICTURES: Picture[] = [];

type PicturesState = {
  pictures: Picture[];
};

const initial_state: PicturesState = {
  pictures: DEFAULT_PICTURES,
};

@Injectable({
  providedIn: 'root',
})
export class PicturesStore {
  private api = inject(Api);
  private readonly state = signalState(initial_state);
  readonly pictures = this.state.pictures;

  constructor() {
    this.loadPictures();
  }

  readonly loadPictures = rxMethod<void>(
    pipe(
      exhaustMap(() => {
        return this.api.getPictures().pipe(
          tap({
            next: (pictures) => patchState(this.state, { pictures }),
          })
        );
      })
    )
  );
}
