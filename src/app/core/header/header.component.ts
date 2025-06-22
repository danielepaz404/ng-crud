import { Component, input, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    title: WritableSignal<string> = signal<string>('');
}
