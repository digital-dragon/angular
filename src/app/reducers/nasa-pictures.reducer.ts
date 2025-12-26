import { createReducer, on } from '@ngrx/store';
import { NasaPicturesActions } from '../actions/nasa-pictures.actions';
import { Picture } from '../types/picture';

export const nasaPicturesFeatureKey = 'nasaPictures';

export type NasaPicturesState = Picture[];

export const initialState: NasaPicturesState = [];

export const NasaPicturesReducer = createReducer(
  initialState,
  on(
    NasaPicturesActions.loadNasaPicturesSuccess,
    (state, payLoad: { nasaPictures: Picture[] }) => {
      const newState = [...state, ...payLoad.nasaPictures];
      newState.forEach((pic) => console.log(JSON.stringify(pic)));
      return newState;
    }
  ),
  on(NasaPicturesActions.loadNasaPicturesFailure, (error) => [...initialState])
);
