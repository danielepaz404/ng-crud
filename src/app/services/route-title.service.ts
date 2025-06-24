import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouteTitleService {
    private titleSubject = new BehaviorSubject<string>(''); // Default fallback
    public title$ = this.titleSubject.asObservable();

    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    let route = this.route;
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route.snapshot.routeConfig?.title || 'Home';
                }),
                filter(title => typeof title === 'string')
            )
            .subscribe(title => this.titleSubject.next(title));
    }
}
