import { Action } from '@ngrx/store';

import { ToDoActionTypes } from '../actions/to-do.actions'

export interface State {
  list: string[];
  total: number;
}

export const initialState: State = {
  list: [],
  total: 0
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    case ToDoActionTypes.AddTask:
      state.list.push(action['payload']);

      return Object.assign({}, state, {
        total: state.total + 1
      });

    case ToDoActionTypes.RemoveTask:
      state.list = state.list.filter(item => item !== action['payload'])

      return Object.assign({}, state, {
        total: state.total - 1
      });  

    default:
      return state;
  }
}
