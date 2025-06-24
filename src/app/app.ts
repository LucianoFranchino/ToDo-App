import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';
import { FormsModule } from '@angular/forms';
import { TaskDescription } from './task-description';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskForm, TaskList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo-app';
  tasks: TaskDescription[] = [];

  addTask(task: TaskDescription) {
    this.tasks.push(task);
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
