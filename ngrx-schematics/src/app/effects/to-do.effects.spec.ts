import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { TodoEffects } from '../effects/todo.effects';

describe('TodoService', () => {
  let actions$: Observable<any>;
  let effects: TodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
