import { Component, input, InputSignal, Signal } from "@angular/core";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
    items: InputSignal<number[]> = input<number[]>([]);
}