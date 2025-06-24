import { Component,Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  @Input() tasks: string[] = [];
  @Output() taskRemoved = new EventEmitter<number>();

  removeTask(index: number) {
    this.taskRemoved.emit(index);
  }
}
