import { ID } from '@datorama/akita';

export interface User {
  id: ID;
}

/**
 * A factory function that creates User
 */
export function createUser(params: Partial<User>) {
  return {

  } as User;
}
