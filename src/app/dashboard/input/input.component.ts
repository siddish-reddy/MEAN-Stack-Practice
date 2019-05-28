import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostTodoService } from '../../post-todo.service';
import { Task } from '../task.model';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private postTodoService: PostTodoService) { }

  taskForm = new FormGroup({
    name: new FormControl(''),
    desc: new FormControl('')
  });

  ngOnInit() {
  }

  onSubmit() {
    if (this.taskForm.value && this.taskForm.value.name && this.taskForm.value.desc) {

      const task: Task = new Task(this.taskForm.value.name,
        this.taskForm.value.desc);

      this.postTodoService.postItem(task)
        .subscribe(() => console.log('Posted'));
    }
  }
}
