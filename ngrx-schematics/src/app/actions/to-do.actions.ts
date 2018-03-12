import { Action } from '@ngrx/store';

export enum ToDoActionTypes {
  AddTask = '[ToDo] ADD TASK',
  AddTaskSuccess = '[ToDo] ADD TASK SUCCESS',
  AddTaskFail = '[ToDo] ADD TASK FAIL',
  RemoveTask = '[ToDo] REMOVE TASK',
  RemoveTaskSuccess = '[ToDo] REMOVE TASK SUCCESS',
  RemoveTaskFail = '[ToDo] REMOVE TASK FAIL'
}

export class ToDoAddTask implements Action {
  readonly type = ToDoActionTypes.AddTask;

  constructor(payload: any) {}
}

export class ToDoAddTaskSuccess implements Action {
  readonly type = ToDoActionTypes.AddTaskSuccess;

  constructor(payload: any) {}
}

export class ToDoAddTaskFail implements Action {
  readonly type = ToDoActionTypes.AddTaskFail;

  constructor(payload: any) {}
}

export class ToDoRemoveTask implements Action {
  readonly type = ToDoActionTypes.RemoveTask;

  constructor(payload: any) {}
}

export class ToDoRemoveTaskSuccess implements Action {
  readonly type = ToDoActionTypes.RemoveTaskSuccess;

  constructor(payload: any) {}
}

export class ToDoRemoveTaskFail implements Action {
  readonly type = ToDoActionTypes.RemoveTaskFail;

  constructor(payload: any) {}
}

export type ToDoActions = ToDoAddTask 
                        | ToDoAddTaskSuccess
                        | ToDoAddTaskFail
                        | ToDoRemoveTaskSuccess
                        | ToDoRemoveTaskFail; 
