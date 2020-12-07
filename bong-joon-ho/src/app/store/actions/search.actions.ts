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
  '[SearchBox] Search Box Clicked'
);

export const SearchFilm = createAction(
  '[Poster] Search For a Film Poster',
  props<{ filmName: string }>()
);
