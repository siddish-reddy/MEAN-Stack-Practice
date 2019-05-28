import { TestBed } from '@angular/core/testing';

import { PostTodoService } from './post-todo.service';

describe('PostTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostTodoService = TestBed.get(PostTodoService);
    expect(service).toBeTruthy();
  });
});
