import { ID } from '@datorama/akita';

export interface Todo {
  id: ID;
  userId: number;
  title: string;
  completed: boolean;
}
