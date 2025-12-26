import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Picture } from '../types/picture';

export const FavoritePictureActions = createActionGroup({
  source: 'FavoritePicture',
  events: {
    'Add FavoritePictures': props<{ favoritePicture: Picture }>(),
    'Remove FavoritePictures': props<{ pictureDate: string }>(),
  },
});
