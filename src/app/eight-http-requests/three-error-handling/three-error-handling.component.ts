import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

interface Todo {
  description:string;
  id?:string;
}

@Component({
  selector: 'app-three-error-handling',
  templateUrl: './three-error-handling.component.html',
  styles: [``]
})
export class ThreeErrorHandlingComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  database:string = 'https://error-handling-69430-default-rtdb.firebaseio.com';
  folder:string = '/todos';
  json:string = '.json';
  url:string = this.database + this.folder + this.json;

  @ViewChild('form') form?:NgForm;
  todoList:Todo[] = [];

  spinner:boolean = false;
  isFetching:boolean = false;
  errorTitle?:string
  error:string | null = null;
  
  ngOnInit():void {
    this.onFetchTodos();
  }

  onAddTodo( newItem:Todo ):void {
    this.http
      .post <{[key:string]:Todo}> (this.url, newItem)
      .subscribe(
        () => this.onFetchTodos(),
        () => {
          this.errorTitle = `You have reached the today's limit!`
          this.error = 'You are not allowed to add new to-do items!'
        }
      )
    
    this.form!.reset()
  }

  onFetchTodos():void {
    this.isFetching = true;
    this.http
      .get <{[key:string]:Todo}> (this.url)
      .pipe(
        map( responseData => {
          const todoArray:Todo[] = [];
          for (let key in responseData)
            if (responseData.hasOwnProperty(key))
              todoArray.push({ ...responseData[key], id:key });
          return todoArray;
        })
      )
      .subscribe(
        todos => {
          this.isFetching = false;
          this.todoList = todos;
        }
      )
  }

  onSingleTodoDelete( id:Todo['id'] ) {
    this.isFetching = true;
    this.http
      .delete(this.database + this.folder + '/' + id + this.json)
      .subscribe(
        () => {
          this.isFetching = false;
          this.todoList.splice(id as any, 1);
          this.onFetchTodos();
        },
        () => {
          this.isFetching = false;
          this.errorTitle = `Access denied!`
          this.error = 'You are not allowed to delete existing todos!'
        }
      )
  }

  onClearList():void {
    this.isFetching = true
    this.http
      .delete(this.url)
      .subscribe(
        () => {
          this.isFetching = false;
          this.todoList = [];
          this.onFetchTodos();
        },
        () => {
          this.isFetching = false;
          this.errorTitle = `Access denied!`
          this.error = 'You are not allowed to clear the todo list!'
        }
      )
  }

  onCloseAlert():void {
    this.error = null;
  }

}
