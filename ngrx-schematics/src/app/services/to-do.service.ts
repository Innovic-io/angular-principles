import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ToDoService {

  private tasks = [];

  constructor() {}

  getTasks(): Observable<string[]> {

    return Observable.of(this.tasks);
  }

  addTask(task: string) {
    this.tasks.push(task);

    return Observable.of(task);
  }

  removeTask(task: string) {
    this.tasks.filter(item => item !== task);

    return Observable.of(task);
  }
}
