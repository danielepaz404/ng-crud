import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouteTitleService {
    private titleSubject = new BehaviorSubject<string>(''); // Default fallback
    public title$ = this.titleSubject.asObservable();

    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => this.route),
                map(route => {
                    console.log(route);
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                }),
                mergeMap(route => route.data),
                map(data => data['title'] || 'Home')
            )
            .subscribe(title => this.titleSubject.next(title));
    }
}
