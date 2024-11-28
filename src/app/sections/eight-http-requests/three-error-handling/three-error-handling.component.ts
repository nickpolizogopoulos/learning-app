import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

import { getFirebaseEndpoint } from '../http-utilities';
import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

type Todo = {
  description: string;
  id?: string;
}

@Component({
  selector: 'app-three-error-handling',
  templateUrl: './three-error-handling.component.html',
  styles: `
    
    p {
      background-color: transparent;
    }
    
  `,
  host: lessonsHostClasses
})
export class ThreeErrorHandlingComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {}

  private url: string = getFirebaseEndpoint('todos');

  @ViewChild('form') form?: NgForm;
  todoList: Todo[] = [];

  isFetching: boolean = false;
  errorTitle?: string
  error: string | null = null;
  
  ngOnInit(): void {
    this.fetchTodos();
  }

  onAddTodo( newItem: Todo ): void {
    this.isFetching = true;
    this.http
      .post <{[key: string]: Todo}> (this.url, newItem)
      .subscribe({
        next: () => {
          this.isFetching = false;
          this.fetchTodos();
        },
        error: () => {
          this.isFetching = false;
          this.errorTitle = `You have reached the today's limit!`
          this.error = 'You are not allowed to add new to-do items!'
        }
      });
    
    this.form!.reset();
  }

  fetchTodos(): void {
    this.isFetching = true;
    this.http
      .get <{[key: string]: Todo}> (this.url)
      .pipe(
        map( responseData => {
          const todoArray:Todo[] = [];
          for (let key in responseData)
            if (responseData.hasOwnProperty(key))
              todoArray.push({ ...responseData[key], id:key });
          return todoArray;
        })
      )
      .subscribe({
        next: todos => {
          this.isFetching = false;
          this.todoList = todos;
        }
      });
  }

  onSingleTodoDelete( id: Todo['id'] ): void {
    this.isFetching = true;
    this.http
      .delete('https://learning-angular-app-http-default-rtdb.europe-west1.firebasedatabase.app/todos/' + id + '.json')
      .subscribe({
        next: () => {
          this.isFetching = false;
          this.todoList.splice(id as any, 1);
          this.fetchTodos();
        },
        error: () => {
          this.isFetching = false;
          this.errorTitle = `Access denied!`
          this.error = 'You are not allowed to delete existing todos!'
        }
      });
  }

  onClearList(): void {
    this.isFetching = true
    this.http
      .delete(this.url)
      .subscribe({
        next: () => {
          this.isFetching = false;
          this.todoList = [];
          this.fetchTodos();
        },
        error: () => {
          this.isFetching = false;
          this.errorTitle = `Access denied!`
          this.error = 'You are not allowed to clear the todo list!'
        }
      });
  }

  onCloseAlert(): void {
    this.error = null;
  }

}
