import { createFeatureSelector, ActionReducer, MetaReducer, ActionReducerMap, Action } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

import * as fromPoster from './poster.reducer';
import * as fromSearch from './search.reducer';

export interface State {
  [fromPoster.posterFeatureKey]: fromPoster.State;
  [fromSearch.searchFeatureKey]: fromSearch.State
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromPoster.posterFeatureKey]: fromPoster.reducer,
    [fromSearch.searchFeatureKey]: fromSearch.reducer
  }),
});

/**
 * Log actions and reducer state.  This is only used in dev mode and
 * enabled/disabled by the production property in environment file.
 * @param reducer action that has been triggered and state
 */
export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

/**
 * Reducer middleware.  This hooks into the action->reducer pipeline,
 * before the normal reducers are invoked.  Kind of like a higher order
 * reducer
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getPosterState = createFeatureSelector<State, fromPoster.State>(
  fromPoster.posterFeatureKey
);

export const getSearchState = createFeatureSelector<State, fromSearch.State>(
  fromSearch.searchFeatureKey
);
