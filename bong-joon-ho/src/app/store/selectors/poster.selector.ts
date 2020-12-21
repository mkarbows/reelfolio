import { createSelector, createFeatureSelector } from '@ngrx/store';

import { State } from '../reducers/search.reducer';

export const searchState = createFeatureSelector<State>('search');

export const searchResultsOptions = createSelector(
  searchState,
  (state: State) => state.searchResults
)
