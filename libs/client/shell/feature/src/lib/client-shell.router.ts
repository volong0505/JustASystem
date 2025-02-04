import { Route } from '@angular/router';
import { AuthComponent } from '@just-a-system/client-auth-feature';

export const clientShellRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('@just-a-system/client-shell-ui-layout').then(c => c.LayoutComponent),
        children: [
            {
                path: 'books',
                loadComponent: () => import('@just-a-system/client-books-feature').then(c => c.BooksComponent)
            }
        ]
    },
    {
        path: 'login',
        component: AuthComponent
    }
]