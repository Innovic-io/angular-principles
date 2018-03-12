import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { State } from '../reducers/index';

import * as todoActions from '../actions/to-do.actions';

@Injectable()
export class ToDoEffects {
  constructor(private actions$: Actions, private store: Store<State>) {}

  @Effect()
  addTask$ = this.actions$
    .ofType(todoActions.ToDoActionTypes.AddTask)
    .map((action: todoActions.ToDoAddTask) => {

      localStorage.setItem(action['payload'], action['payload']);
      
      if (localStorage.getItem(action['payload'])) {
        return new todoActions.ToDoAddTaskSuccess(action['payload']);
      } else  {
        return new todoActions.ToDoRemoveTaskFail('?');
      }
    });

  @Effect()
  removeTask$ = this.actions$
    .ofType(todoActions.ToDoActionTypes.RemoveTask)
    .map((action: todoActions.ToDoRemoveTask) => {

      localStorage.removeItem(action['payload']);

      return new todoActions.ToDoRemoveTaskSuccess(action['payload']);
    });
}
