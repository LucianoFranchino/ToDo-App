import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskDescription } from '../task-description';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {
  newTask: string = '';
  taskDescription: string = '';
  taskDate: string = '';
  taskImportance: string = '';


  @Output() taskAdded = new EventEmitter<TaskDescription>();

  addTask(){
    if (this.newTask.trim() !== '') {
      const task: TaskDescription = {
        name: this.newTask,
        description: this.taskDescription,
        date: this.taskDate,
        importance: this.taskImportance,
        completed: false
      }
      this.taskAdded.emit(task);
      this.newTask = '';
      this.taskDescription = '';
      this.taskDate = '';
      this.taskImportance = '';
    }
  }
}
