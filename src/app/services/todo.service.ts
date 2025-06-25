import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";

@Injectable()
export class TodoService {
    apiUrl = 'api/todos';
    lastCapturedData : Todo[] = [];

    constructor() {
        const currentData = localStorage.getItem('mockTodoData');

        if(!currentData){
            localStorage.setItem('mockTodoData', JSON.stringify([]))
        }
    }

    getTodos(): Todo[] {
        const currentStoredData = localStorage.getItem('mockTodoData');

        if(currentStoredData){
            return JSON.parse(currentStoredData);
        }

        return [];
    }

    addTodo(todo: Todo){
        const currentData = this.getTodos();
        currentData.push(todo);
        localStorage.setItem('mockTodoData', JSON.stringify(currentData))   
    }
}