import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { add, remove } from '../actions/todo.actions';

export interface ITodoState {
  todoes: {
    id: number;
    body: string;
  }[];
}

export const initialState: ITodoState = {
  todoes: [{ id: 1, body: 'Angular' }],
};

export const todoReducer = createReducer(
  initialState,
  on(
    add,
    (state, params): ITodoState => ({
      ...state,
      todoes: [...state.todoes, { id: Math.floor(Math.random() * 10000), body: params.body }],
    }),
  ),
  on(
    remove,
    (state, params): ITodoState => ({ todoes: state.todoes.filter(t => t.id !== params.id) }),
  ),
);

export const selectTodoesItems = createSelector(
  createFeatureSelector('todoes'),
  (state: ITodoState) => state.todoes,
);
