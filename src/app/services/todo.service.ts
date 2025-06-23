import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Todo } from "./todo.model";

@Injectable()
export class TodoService {
    apiUrl = 'api/todos';

    constructor(private http: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.apiUrl).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        console.error(error);
        return throwError(() => new Error(error));
    }
}