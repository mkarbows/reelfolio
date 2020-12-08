import { createSelector } from '@ngrx/store';

// reducers
import * as fromFeature from '../reducers';
import * as fromSearch from '../reducers/search.reducer';

export interface SearchState {
  filmName: string;
  searchBoxClicked: boolean;
  searchResults: any;
}

export const selectSearchResults = (fromSearch) => fromSearch.searchResults;

export const searchResultsOptions = createSelector(
  fromFeature.getSearchState,
  selectSearchResults,
  (state) => state.searchResults
);