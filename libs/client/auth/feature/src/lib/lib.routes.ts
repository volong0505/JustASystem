import { Route } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const clientAuthFeatureRoutes: Route[] = [
  /* { path: '', pathMatch: 'full', component: InsertYourComponentHere } */
  {
    path: '',
    component: AuthComponent
  }
];
