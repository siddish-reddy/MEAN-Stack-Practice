import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from './task.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: Array<Task>;

  taskForm = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl('')
  });
  constructor() {
    this.tasks = [];
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.taskForm.value && this.taskForm.value.name && this.taskForm.value.desc) {
      const task: Task = new Task(this.taskForm.value.name, this.taskForm.value.desc);
      this.tasks.push(task);
    }
  }
}
