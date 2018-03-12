import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '../app/reducers'

import { ToDoActionTypes } from '../app/actions/to-do.actions'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoList$: Observable<string[]>;
  totalTask$: Observable<number>;

  constructor(private store: Store<State>) {}

  ngOnInit() {

    this.todoList$ = this.store.select('todo').pluck('list');
    this.totalTask$ = this.store.select('todo').pluck('total');
  }

  addTask(ev) {
    this.store.dispatch({
      type: ToDoActionTypes.AddTask,
      payload: ev
    });
  }

  removeTask(ev) {
    this.store.dispatch({
      type: ToDoActionTypes.RemoveTask,
      payload: ev
    });
  }
}
