import { Action, createReducer, on } from '@ngrx/store';

import {
  PosterActions
} from '../actions';

export const posterFeatureKey = 'poster';

export interface State {
  posterId: number;
}

export const initialState: State = {
  posterId: 1
};

export const reducer  = createReducer(
  initialState,
  on(PosterActions.PosterClicked, (state: State, { posterId }) => {
    return {
      ...state,
      posterId: posterId
    };
  })
);

export function PosterReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}