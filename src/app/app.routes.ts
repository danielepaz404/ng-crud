import { Routes } from '@angular/router';
import { ListComponent } from './core/list/list.component';
import { CreateComponent } from './core/create/create.component';

const pageTitle = "ngCrud";

export const routes: Routes = [
    {
        path: '',
        title: pageTitle,
        children: [
            {
                path: 'list',
                title: `${pageTitle} - List of records`,
                component: ListComponent,
            },
            {
                path: 'create',
                title: `${pageTitle} - Create record`,
                component: CreateComponent,
            }
        ]
    },
];
