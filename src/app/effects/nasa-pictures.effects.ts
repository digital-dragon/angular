import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Api } from '../services/api';
import { NasaPicturesActions } from '../actions/nasa-pictures.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class NasaPicturesEffects {
  actions$ = inject(Actions);
  api = inject(Api);

  laodNasaPictures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NasaPicturesActions.loadNasaPictures),
      exhaustMap(() => this.api.getPictures()),
      map((pictures) =>
        NasaPicturesActions.loadNasaPicturesSuccess({ nasaPictures: pictures })
      ),
      catchError((error) =>
        of(NasaPicturesActions.loadNasaPicturesFailure({ error }))
      )
    )
  );
}
