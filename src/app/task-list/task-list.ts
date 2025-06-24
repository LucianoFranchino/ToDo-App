import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDescription } from '../task-description';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  @Input() tasks: TaskDescription[] = [];
  @Output() taskRemoved = new EventEmitter<number>();

  removeTask(index: number) {
    this.taskRemoved.emit(index);
  }
}

