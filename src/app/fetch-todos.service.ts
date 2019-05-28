import { Injectable } from '@angular/core';
import { Task } from './dashboard/task.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchTodosService {

  tasks: Task[] = [new Task('Task1', 'Description for Task1')];

  constructor() { }

  getTodos(): Observable<Array<Task>> {
    return of(this.tasks);
  }
}
