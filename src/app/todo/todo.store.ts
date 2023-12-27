import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

interface IState {
  todoes: Todo[];
}
type Todo = {
  id: number;
  body: string;
};

@Injectable()
export class TodoStore extends ComponentStore<IState> {
  constructor() {
    super({
      todoes: [],
    });
  }

  readonly todoes$: Observable<Todo[]> = this.select(({ todoes }) =>
  todoes);

  readonly add = this.updater((state, body: string): IState =>
    ({ todoes: [...state.todoes, { id: Math.floor(Math.random() * 10000), body}] }));
  readonly delete = this.updater((state, id: number): IState => ({ todoes: state.todoes.filter(t => t.id !== id) }));
}
