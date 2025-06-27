import { Component, Input, Output, EventEmitter, output } from '@angular/core';
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
  @Output() taskComplete =new EventEmitter<TaskDescription>();


  removeTask(index: number) {
    this.taskRemoved.emit(index);
  }

  checkComplete(task: TaskDescription){
    this.taskComplete.emit(task);
  }
}

