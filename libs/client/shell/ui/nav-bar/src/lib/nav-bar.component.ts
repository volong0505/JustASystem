import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { UIStore } from '@just-a-system/client-shared-data-access-store';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'client-nav-bar',
  imports: [
    CommonModule,
    NzIconModule,
    NzMenuModule,
    RouterModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  navItemsStore = inject(UIStore);

  ngOnInit(): void {
  }
}
