import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PosterService } from '../../services/poster.service';
import { PosterActions } from '../actions';

@Injectable()
export class PosterEffects {

  // loadMovies$ = createEffect(() => this.actions$.pipe(
  //   ofType('[Poster] Poster Clicked'),
  //   mergeMap(() => this.moviesService.getAll()
  //     .pipe(
  //       map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
  //       catchError(() => EMPTY)
  //     ))
  //   )
  // );

  // posterSelected$ = createEffect(() => this.actions$.pipe(
  //   ofType(PosterActions.PosterClicked),

  // ))

  constructor(
    private actions$: Actions,
    private posterService: PosterService
  ) {}

}
