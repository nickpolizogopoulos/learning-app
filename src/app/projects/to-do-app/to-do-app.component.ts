import { Component } from '@angular/core';

type todoItem = {
  id: number;
  title: string;
  comment: string;
  day: string;
  important: boolean;
}

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrl: '../projects.scss'
})
export class ToDoAppComponent {

  toDoTitle: string = '';
  toDoComment: string = '';
  toDoImportant!: boolean;
  toDoDay: string = '-';

  weekDays: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  toDoList: todoItem[] = [
    {
      id: 1,
      title: 'Doctor appointment',
      comment: 'General Hospital.',
      day: 'Friday',
      important:true
    },
    {
      id: 2,
      title: 'Make the second project',
      comment: 'The "Super Signature Maker" project.',
      day: 'Monday',
      important:false
    }
  ];

  formVisible: boolean = true;

  onHideOrShowForm(): void {
    this.formVisible = !this.formVisible;
  }

  onAddToDoItem(): void {
    this.toDoList.push({
      id: this.toDoList.length + 1,
      title: this.toDoTitle,
      comment: this.toDoComment,
      day: this.toDoDay,
      important: this.toDoImportant
    });
    this.toDoTitle = '';
    this.toDoComment = '';
    this.toDoImportant = false;
    this.toDoDay = '-'
  }

  onImportantClick(): void {
    this.toDoList.sort( (a, b) => Number(b.important) - Number(a.important) );
  }

  onNonImportantClick(): void {
    this.toDoList.sort( (a, b) => Number(a.important) - Number(b.important) );
  }

  onResetListClick(): void {
    this.toDoList.sort( (a, b) => a.id - b.id );
  }

  onDeleteTodo( i: number ): void {
    this.toDoList.splice(i, 1);
  }

  onClearList(): void {
    this.toDoList.length = 0;
  }

  addFourToDoItems(): void {
    this.toDoList.push(
      {
        id: this.toDoList.length + 1,
        title: 'Call George.',
        comment: 'To ask information about the trip.',
        day: 'Saturday',
        important: false
      },
      {
        id: this.toDoList.length + 2,
        title: 'Send the important email.',
        comment: `Don't forget the list of questions.`,
        day: 'Friday',
        important: true
      },
      {
        id: this.toDoList.length + 3,
        title: 'Finish the Angular project.',
        comment: `Issues remaining: 3`,
        day: 'Sunday',
        important: false
      },
      {
        id: this.toDoList.length + 4,
        title: 'Meet with Jelly',
        comment: `Finish the project together`,
        day: 'Wednesday',
        important: true
      }
    );
  }

}
