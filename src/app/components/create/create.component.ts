import { Component } from "@angular/core";
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: '',
    templateUrl: './create.component.html',
    styleUrl: './create.component.scss',
    imports: [ReactiveFormsModule, FormsModule]
})
export class CreateComponent {
    reactiveForm: FormGroup;

    constructor(private formBuilder: FormBuilder){
        this.reactiveForm = this.formBuilder.group({
            description: ['',  [ Validators.required, Validators.minLength(4)]],
            priority: ['']
        });
    }

    descriptionTemplateControl = '';
    priorityTemplateControl = '';
}