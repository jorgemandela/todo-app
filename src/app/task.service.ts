import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  tasks: string[] = [];

addTask(task: string) {
  this.tasks.push(task);
}

getTasks() {
  return this.tasks;
}

}
