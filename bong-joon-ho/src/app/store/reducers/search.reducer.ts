import { Action, createReducer, on } from '@ngrx/store';
import { PosterActions, SearchActions } from '../actions';

export const searchFeatureKey = 'search';

export interface State {
  filmName: string;
  searchBoxClicked: boolean;
  searchResults: any;
}

export const initialState: State = {
  filmName: '',
  searchBoxClicked: false,
  searchResults: ['']
};


export const reducer = createReducer(
  initialState,
  on(SearchActions.SearchFilm, (state: State, { filmName }) => {
    return {
      ...state,
      filmName: filmName
    };
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
  }),
  on(SearchActions.SearchFilmSuccess, (state: State, { searchResults }) => {
    return {
      ...state,
      searchResults: searchResults.results
    }
  })
);

export function SearchReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}
