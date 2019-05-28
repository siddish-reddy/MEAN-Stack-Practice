import { Component, OnInit } from '@angular/core';
import { FetchTodosService } from '../../fetch-todos.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit {
  tasks: Task[];
  constructor(private fetchTodoService: FetchTodosService) {
    this.tasks = [];
  }
  getTodos(): void {
    this.fetchTodoService.getTodos()
      .subscribe(tasks =>
        this.tasks = tasks);
  }

  ngOnInit() {
    this.getTodos();
  }

}
