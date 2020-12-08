import { createAction, props } from '@ngrx/store';

export const SearchBoxClicked = createAction(
  '[SearchBox] Search Box Clicked'
);

export const SearchFilm = createAction(
  '[SearchBox] Search For a Film Poster',
  props<{ filmName: string }>()
);

export const SearchFilmSuccess = createAction(
  '[SearchBox] Search For a Film Success',
  props<{ searchResults: any }>()
);

export const SearchFilmError = createAction(
  '[SearchBox] Search For a Film Error',
  props<{ error: any }>()
);