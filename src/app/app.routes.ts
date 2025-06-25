import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

const pageTitle = "ngCrud";

export const routes: Routes = [
    {
        path: 'list',
        title: `${pageTitle} - List of records`,
        component: ListComponent,
    },
    {
        path: 'create',
        title: `${pageTitle} - Create record`,
        component: CreateComponent,
    },
    {
        path: 'edit/:id',
        title: `${pageTitle} - Edit record`,
        component: CreateComponent
    }
];
