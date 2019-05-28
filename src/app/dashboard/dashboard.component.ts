import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from './task.model';
import { FetchTodosService } from '../fetch-todos.service';
import { PostTodoService } from '../post-todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: Array<Task> = [];

  taskForm = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl('')
  });

  constructor(
    private fetchTodoService: FetchTodosService,
    private postTodoService: PostTodoService) {
  }

  getTodos(): void {
    this.fetchTodoService.getTodos()
      .subscribe(tasks =>
        this.tasks = tasks);
  }

  ngOnInit() {
    this.getTodos();
  }
  onSubmit() {
    if (this.taskForm.value && this.taskForm.value.name && this.taskForm.value.desc) {

      const task: Task = new Task(this.taskForm.value.name,
        this.taskForm.value.desc);

      this.postTodoService.postItem(task)
        .subscribe(() => this.tasks.push(task));
    }
  }
}
