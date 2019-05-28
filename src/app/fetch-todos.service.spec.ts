import { TestBed } from '@angular/core/testing';

import { FetchTodosService } from './fetch-todos.service';

describe('FetchTodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchTodosService = TestBed.get(FetchTodosService);
    expect(service).toBeTruthy();
  });
});
