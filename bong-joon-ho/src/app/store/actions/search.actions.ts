import { createAction, props } from '@ngrx/store';

export const loadSearchs = createAction(
  '[Search] Load Searchs'
);

export const loadSearchsSuccess = createAction(
  '[Search] Load Searchs Success',
  props<{ data: any }>()
);

export const loadSearchsFailure = createAction(
  '[Search] Load Searchs Failure',
  props<{ error: any }>()
);

export const SearchBoxClicked = createAction(
  '[SearchBox] Search box clicked',
  props<{ searchBoxClicked: boolean }>()
);

export const SearchMovie = createAction(
  '[Poster] Search for a movie poster',
  props<{ movie: string }>()
);
