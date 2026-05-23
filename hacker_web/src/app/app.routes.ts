import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Signal } from './signal/signal';
import { Angular } from './angular/angular';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'dashboard',
        component: Home
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        loadChildren: () =>
            import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'angular',
        component: Angular,
    },
    {
        path: 'blogs',
        loadChildren: () =>
            import('./blogs/blogs-routes').then(m => m.routes)
    },
    {
        path: 'counter',
        loadComponent: () =>
            import('./counter/counter').then(m => m.Counter)
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: 'signals',
        component: Signal,
    },
    {
        path: 'contact',
        component: Contact,
    },
];
