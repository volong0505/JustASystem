import { Route } from '@angular/router';
import { AuthComponent } from '@just-a-system/client-auth-feature';

export const clientShellRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('@just-a-system/client-shell-ui-layout').then(c => c.LayoutComponent)
    },
    {
        path: 'login',
        component: AuthComponent
    }
]