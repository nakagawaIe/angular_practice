import { Component } from '@angular/core';
import { TodoStore } from './todo.store';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [TodoStore],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  constructor(private todoStore: TodoStore) {}

  readonly todoes$ = this.todoStore.todoes$;

  body = new FormControl('');

  addTodo() {
    const { value } = this.body;
    if (!value) return;
    this.todoStore.add(value);
    this.body.reset();
  }

  deleteTodo(id: number) {
    this.todoStore.delete(id);
  }
}
