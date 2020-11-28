import { Action, createReducer, on } from '@ngrx/store';

import {
  PosterActions,
  SearchActions
} from '../actions';

export const posterFeatureKey = 'poster';

export interface State {
  movie: string;
  searchBoxClicked: boolean;
}

export const initialState: State = {
  movie: '',
  searchBoxClicked: false
};

export const reducer  = createReducer(
  initialState,
  on(SearchActions.SearchMovie, (state: State, { movie }) => {
    return { ...state, movie: movie };
  }),
  on(SearchActions.SearchBoxClicked, (state: State, { searchBoxClicked }) => {
    return { ...state, searchBoxClicked: searchBoxClicked };
  })
);

export function PosterReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}