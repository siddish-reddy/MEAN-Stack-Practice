import { Injectable } from '@angular/core';
import { Task } from './dashboard/task.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchTodosService {

  tasks: Task[] = [new Task('Task1', 'Description for Task1')];
  getUrl = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.getUrl);
  }
}
