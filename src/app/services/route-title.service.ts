import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterStateSnapshot, RouterConfigOptions, Route } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouteTitleService {
    private titleSubject = new BehaviorSubject<string>('');
    private pathSubject = new BehaviorSubject<string>('');
    public title$ = this.titleSubject.asObservable();
    public path$ = this.pathSubject.asObservable();

    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    let route = this.route;
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route.snapshot.routeConfig
                })
            )
            .subscribe((routeConfig: Route | null) => {
                console.log(routeConfig?.title)
                this.titleSubject.next((routeConfig?.title) as string || 'Home');
                this.pathSubject.next(routeConfig?.path || '');
            });
    }
}
