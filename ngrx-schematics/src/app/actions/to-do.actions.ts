import { Action } from '@ngrx/store';

export enum ToDoActionTypes {
  AddTask = '[ToDo] ADD TASK',
  RemoveTask = '[ToDo] REMOVE TASK'
}

export class ToDoAddTask implements Action {
  readonly type = ToDoActionTypes.AddTask;

  constructor(payload: any) {}
}

export class ToDoRemoveTask implements Action {
  readonly type = ToDoActionTypes.RemoveTask;

  constructor(payload: any) {}
}

export type ToDoActions = ToDoAddTask | ToDoRemoveTask; 
