import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Picture } from '../types/picture';

export const NasaPicturesActions = createActionGroup({
  source: 'NasaPictures',
  events: {
    'Load NasaPictures': emptyProps(),
    'Load NasaPictures Success': props<{ nasaPictures: Picture[] }>(),
    'Load NasaPictures Failure': props<{ error: Error }>(),
  },
});
