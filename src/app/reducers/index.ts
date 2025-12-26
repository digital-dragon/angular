import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import {
  favoritePictureFeatureKey,
  FavoritePictureReducer,
  FavoritePictureState,
} from './favorite-picture.reducer';
import {
  nasaPicturesFeatureKey,
  NasaPicturesReducer,
  NasaPicturesState,
} from './nasa-pictures.reducer';

export interface State {
  [favoritePictureFeatureKey]: FavoritePictureState;
  [nasaPicturesFeatureKey]: NasaPicturesState;
}

export const reducers: ActionReducerMap<State> = {
  [favoritePictureFeatureKey]: FavoritePictureReducer,
  [nasaPicturesFeatureKey]: NasaPicturesReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
