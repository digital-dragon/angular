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

export interface State {
  [favoritePictureFeatureKey]: FavoritePictureState;
}

export const reducers: ActionReducerMap<State> = {
  [favoritePictureFeatureKey]: FavoritePictureReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
