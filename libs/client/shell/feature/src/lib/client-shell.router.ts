import { Route } from '@angular/router';
import { LayoutComponent } from '@just-a-system/client-shell-ui-layout'
import { LoginComponent } from '@just-a-system/client-auth-ui-login';

export const clientShellRoutes: Route[] = [
    {
        path: '',
        component: LayoutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]