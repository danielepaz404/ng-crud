import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoTodoService implements InMemoryDbService {
  createDb() {
    let todos = [
      { id: 1, description: 'Windstorm', priority: 1 },
      { id: 2, description: 'Bombasto', priority: 1 },
      { id: 3, description: 'Magneta', priority: 1 },
      { id: 4, description: 'Tornado', priority: 1 }
    ];
    return {todos};
  }
}