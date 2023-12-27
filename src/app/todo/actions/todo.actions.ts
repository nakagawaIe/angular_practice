import { createAction, props } from '@ngrx/store';

export const add = createAction('[TodoComponent] add', props<{ body: string }>());
export const remove = createAction('[TodoComponent] remove', props<{ id: number }>());
