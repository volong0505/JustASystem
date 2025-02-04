import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { NavBarComponent } from '@just-a-system/client-shell-ui-nav-bar';
import { MainViewComponent } from '@just-a-system/client-shell-ui-main-view';
@Component({
  selector: 'client-layout',
  imports: [
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,

    NavBarComponent,
    MainViewComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  isCollapsed = false;

}
