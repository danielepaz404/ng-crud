import { Component, signal, WritableSignal } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Todo } from "../../services/todo.model";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
    items: WritableSignal<Todo[]> = signal<Todo[]>([]);

    constructor(todoService: TodoService) {
        todoService.getTodos().subscribe((value: Todo[]) => {
            this.items.set(value);
        });
    }
}