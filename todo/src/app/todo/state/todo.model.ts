import {guid, ID} from '@datorama/akita';

export interface Todo {
  id: ID;
  completed: boolean;
  description: string;
}

/**
 * A factory function that creates Todo
 */
export function createTodo(desc: string) {
  return {
    id: guid(),
    completed: false,
    description: desc
  } as Todo;
}
