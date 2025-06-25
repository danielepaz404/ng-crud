import { Component } from "@angular/core";
import { RouteTitleService } from "../../services/route-title.service";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [AsyncPipe, RouterLink, RouterLinkActive]
})
export class HeaderComponent {
    title$: Observable<string>;
    activePath$: Observable<string>;

    options: NavigationLink[] = [
        { label: 'Home', path: '/' }, 
        { label: 'List', path: '/list' }, 
        { label: 'Create', path: '/create' }
    ];

    constructor(private routeTitleService: RouteTitleService) {
        this.title$ = this.routeTitleService.title$
        this.activePath$ = this.routeTitleService.path$;
    }
}

interface NavigationLink {
    label: string,
    path: string
}
