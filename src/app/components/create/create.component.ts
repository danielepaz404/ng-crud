import { Component } from "@angular/core";
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { TodoService } from "../../services/todo.service";

@Component({
    selector: '',
    templateUrl: './create.component.html',
    styleUrl: './create.component.scss',
    imports: [ReactiveFormsModule, FormsModule]
})
export class CreateComponent {
    reactiveForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private todoService: TodoService){
        this.reactiveForm = this.formBuilder.group({
            description: ['',  [ Validators.required, Validators.minLength(4)]],
            priority: ['', [Validators.required]]
        });
    }

    descriptionTemplateControl = '';
    priorityTemplateControl = '';

    onSubmit(){
        if(this.reactiveForm.valid){
            this.todoService.addTodo(this.reactiveForm.value)
        }
    }
}