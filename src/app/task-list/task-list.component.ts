import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
 constructor(
  private taskService: TaskService
 ){}

 tasks: string[] = [];
  newTask: string = "";

  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
    this.getTasks();
  }

  completeTask(task: any) {
    task.completed = !task.completed;
  }

  getTasks(){
    this.tasks = this.taskService.getTasks();
  }

  onItemClick(index: number) {
    const itemElement = document.getElementById('item-' + index);
    if (itemElement) {
      itemElement.classList.add('done');
    }
  }
  
  
  
}
