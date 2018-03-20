import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as todo from './to-do.reducer'

export interface State {
  todo: todo.State
}

export const reducers: ActionReducerMap<State> = {
  todo: todo.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
