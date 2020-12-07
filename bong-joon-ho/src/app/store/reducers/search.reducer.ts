import { Action, createReducer, on } from '@ngrx/store';
import { PosterActions, SearchActions } from '../actions';

export const searchFeatureKey = 'search';

export interface State {
  movieName: string;
  searchBoxClicked: boolean;
}

export const initialState: State = {
  movieName: '',
  searchBoxClicked: false
};


export const reducer = createReducer(
  initialState,
  on(SearchActions.SearchMovie, (state: State, { movieName }) => {
    return { ...state, movieName: movieName };
  }),
  on(SearchActions.SearchBoxClicked, (state: State) => {
    return {
      ...state,
      searchBoxClicked: true,
    };
  }),
  on(PosterActions.PosterClicked, (state: State) => {
    return {
      ...state,
      searchBoxClicked: false
    }
  })
);

export function SearchReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}
