import { Action, createReducer, on } from '@ngrx/store';

import {
  PosterActions
} from '../actions';

export const posterFeatureKey = 'poster';

export interface State {
  movie: string;
}

export const initialState: State = {
  movie: ''
};

export const searchMovieReducer  = createReducer(
  initialState,
  on(PosterActions.SearchMovie, state => ({
    ...state,
    movie: state.movie
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return searchMovieReducer(state, action);
}