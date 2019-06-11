import { ID } from '@datorama/akita';

export interface Todo {
  id: ID;
}

/**
 * A factory function that creates Todos
 */
export function createTodo(params: Partial<Todo>) {
  return {

  } as Todo;
}
