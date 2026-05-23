import { Routes } from '@angular/router';
import { AddBlog } from './add-blog/add-blog';
import { BlogList } from './blog-list/blog-list';


export const routes: Routes = [
    {
        path: '',
        component: BlogList,
        children: [
            {
                path: 'add-blog',
                component: AddBlog
            },
            {
                path: 'edit/:id',
                component: AddBlog
            }
        ]
    },

];
