import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

var tasks = [
  'Buy milk and eggs',
  'Do homework',
  'Clean the bedroom'
];

@Injectable()
export class ToDoService {

  constructor() {}

  getTasks(): Observable<string[]> {

    return Observable.of(tasks);
  }

  addTask(task: string) {

    tasks.push(task);

    return Observable.of(task);
  }

  removeTask(task: string) {
    tasks = tasks.filter(item => item !== task);

    return Observable.of(tasks);
  }
}
