import { ToDoActions, ToDoActionTypes } from '../actions/to-do.actions';

export interface State {
  list: string[];
  total: number;
}

export const initialState: State = {
  list: [],
  total: 0
};

export function reducer(state = initialState, action: ToDoActions): State {
  switch (action.type) {

    case ToDoActionTypes.LoadTasksCompleted:

      return Object.assign({}, state);

    case ToDoActionTypes.AddTaskCompleted:

      return Object.assign({}, state, {
        list: [...state.list, action.payload],
        total: state.total + 1
      });

    case ToDoActionTypes.RemoveTaskCompleted:

      return Object.assign({}, state, {
        list: state.list.filter(item => item !== action.payload),
        total: state.total - 1
      });

    default:
      return state;
  }
}
