import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './dashboard/task.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostTodoService {
  url = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  postItem(task: Task): Observable<any> {
    return this.http.post(this.url, task, httpOptions);
  }
}
