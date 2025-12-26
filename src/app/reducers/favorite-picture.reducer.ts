import { createReducer, on } from '@ngrx/store';
import { FavoritePictureActions } from '../actions/favorite-picture.actions';
import { Picture } from '../types/picture';

export const favoritePictureFeatureKey = 'favoritePicture';

export type FavoritePictureState = Picture[];

export const initialState: FavoritePictureState = [];

export const FavoritePictureReducer = createReducer(
  initialState,
  on(
    FavoritePictureActions.addFavoritePictures,
    (state: FavoritePictureState, payLoad: { favoritePicture: Picture }) => {
      return [...state, payLoad.favoritePicture];
    }
  )
);
