import { Component } from "@angular/core";
import { RouteTitleService } from "../../services/route-title.service";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [AsyncPipe]
})
export class HeaderComponent {
    title$: Observable<string>;

    constructor(private routeTitleService: RouteTitleService) {
        this.title$ = this.routeTitleService.title$
    }
}
