import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { State } from '../reducers/index';

import * as todoActions from '../actions/to-do.actions';

import { ToDoService } from '../services/to-do.service';

@Injectable()
export class ToDoEffects {
  constructor(private actions$: Actions, private store: Store<State>, private todo: ToDoService) {}

  @Effect()
  loadTasks$ = this.actions$
    .ofType(todoActions.ToDoActionTypes.LoadTasks)
    .switchMap((action: todoActions.ToDoLoadTasks) => {

      return this.todo.getTasks()
        .map(response => new todoActions.ToDoLoadTasksCompleted(response));
    });

  @Effect()
  addTask$ = this.actions$
    .ofType(todoActions.ToDoActionTypes.AddTask)
    .switchMap((action: todoActions.ToDoAddTask) => {

      return this.todo.addTask(action['payload'])
        .map(response => new todoActions.ToDoAddTaskCompleted(response));
    });

  @Effect()
  removeTask$ = this.actions$
    .ofType(todoActions.ToDoActionTypes.RemoveTask)
    .switchMap((action: todoActions.ToDoRemoveTask) => {

      return this.todo.removeTask(action['payload'])
        .map(response => new todoActions.ToDoRemoveTaskCompleted(response));
    });
}
