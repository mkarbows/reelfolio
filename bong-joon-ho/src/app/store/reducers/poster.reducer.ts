import { Action, createReducer, on } from '@ngrx/store';

import {
  PosterActions,
  SearchActions
} from '../actions';

export const posterFeatureKey = 'poster';

export interface State {
  posterId: number;
  movieName: string;
  searchBoxClicked: boolean;
}

export const initialState: State = {
  posterId: 1,
  movieName: '',
  searchBoxClicked: false
};

export const reducer  = createReducer(
  initialState,
  on(PosterActions.PosterClicked, (state: State, { posterId }) => {
    return {
      ...state,
      posterId: posterId
    };
  }),
  on(SearchActions.SearchMovie, (state: State, { movieName }) => {
    return { ...state, movieName: movieName };
  }),
  on(SearchActions.SearchBoxClicked, (state: State, { searchBoxClicked }) => {
    return { ...state, searchBoxClicked: searchBoxClicked };
  })
);

export function PosterReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}