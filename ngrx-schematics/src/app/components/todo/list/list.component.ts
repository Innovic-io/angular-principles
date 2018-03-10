import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() tasks;
  @Input() total;

  @Output() onRemoveTask: EventEmitter<string> = new EventEmitter();

  constructor() {}

  removeTask(task) {
    this.onRemoveTask.next(task);
  }
}
