import { Action, createReducer, on } from '@ngrx/store';

import {
  PosterActions, SearchActions
} from '../actions';

export const posterFeatureKey = 'poster';

export interface State {
  posterId: number;
  posterClicked: boolean;
}

export const initialState: State = {
  posterId: 1,
  posterClicked: false
};

export const reducer  = createReducer(
  initialState,
  on(PosterActions.PosterClicked, (state: State, { posterId }) => {
    return {
      ...state,
      posterId: posterId,
      posterClicked: true
    };
  }),
  on(SearchActions.SearchBoxClicked, (state: State) => {
    return {
      ...state,
      posterClicked: false
    }
  }),
);

export function PosterReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}