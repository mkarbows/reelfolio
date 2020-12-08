import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { PosterService } from '../../services/poster.service';
import { SearchActions } from '../actions';

@Injectable()
export class PosterEffects {

  searchFilm$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.SearchFilm),
    map((action) => {
      console.log(action);
      return action.filmName;
    }),
    switchMap(filmName =>
      this.posterService.getConfig(filmName).pipe(
        map(searchResults => {
          return SearchActions.SearchFilmSuccess({
            searchResults: searchResults
          });
        }),
        catchError(error =>
          of(SearchActions.SearchFilmError(error))
        )
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private posterService: PosterService
  ) {}

}
