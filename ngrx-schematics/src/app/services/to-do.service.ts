import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ToDoService {

  constructor() {}

  getTasks(): Observable<string[]> {
    let tasks = [];
     
    for (let i = 0; i < localStorage.length; i++) {
      tasks.push(localStorage.getItem(localStorage.key(i)));
    }

    return Observable.of(tasks);
  }

  addTask(task: string) {

    localStorage.setItem(task, task);

    if (localStorage.getItem(task)) {
      return Observable.of(task);
    }
  }

  removeTask(task: string) {

    localStorage.removeItem(task);

    return Observable.of(task);
  }
}
