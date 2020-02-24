import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Todo from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todosUrl: string= 'https://jsonplaceholder.typicode.com/todos';
  limit='?_limit=5';

  getTodos(): Observable<Todo[]>{
    let todos= this.http.get<Todo[]>(`${this.todosUrl}${this.limit}`);
    return todos;
  }

}
