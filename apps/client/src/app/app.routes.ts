import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: async () => (await import('@just-a-system/client-shell')).ClientShellModule
    }
];
