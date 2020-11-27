import { createAction, props } from '@ngrx/store';

export const loadPosters = createAction(
  '[Poster] Load Posters'
);

export const loadPostersSuccess = createAction(
  '[Poster] Load Posters Success',
  props<{ data: any }>()
);

export const loadPostersFailure = createAction(
  '[Poster] Load Posters Failure',
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

