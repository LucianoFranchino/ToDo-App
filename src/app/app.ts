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

  checkTaskComplete(task: TaskDescription){
    const index = this.tasks.indexOf(task);
    if(index > -1){
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  }

  filterTasks(completed: boolean): TaskDescription[] {
    return this.tasks.filter(t => t.completed === completed);
  }

  sortCompleteTask: string = 'nombre';
  sortPendingTask: string = 'nombre';

  getSortedTask(completed:boolean, sortOption: string): TaskDescription[]{
    const filtered = this.tasks.filter( t => t.completed === completed);
    switch(sortOption){
      case 'nombre':
        return filtered.sort((a, b) => a.description.localeCompare(b.description));
      case 'fecha':
        return filtered.sort((a, b) => a.date.localeCompare(b.date));
      case 'prioridad':
        const orden = { alta: 1, media: 2, baja: 3 };
        return filtered.sort((a, b) => orden[a.importance as 'alta' | 'media' | 'baja'] - orden[b.importance as 'alta' | 'media' | 'baja']);
      default:
        return filtered;
    }
  }
}
