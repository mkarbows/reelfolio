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

export const SearchMovie = createAction(
  '[Poster] Search for a movie poster',
  props<{ movie: any }>()
);

export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);
