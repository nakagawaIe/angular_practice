import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ITodoState, selectTodoesItems } from './reducers/todo.reducer';
import { add, remove } from './actions/todo.actions';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  constructor(private store: Store) {
    this.todoes$ = store.select(selectTodoesItems);
  }

  todoes$: Observable<ITodoState['todoes']>;

  body = new FormControl('');

  addTodo() {
    const { value } = this.body;
    if (!value) return;
    this.store.dispatch(add({ body: value }));
    this.body.reset();
  }

  deleteTodo(id: number) {
    this.store.dispatch(remove({ id }));
  }
}
