import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'client-books-board-dnd',
  imports: [CommonModule, CdkDropList, CdkDrag,  NzCardModule, NzGridModule, NzListModule],
  templateUrl: './books-board-dnd.component.html',
  styleUrl: './books-board-dnd.component.css',
})
export class BooksBoardDndComponent {

  data = [
    {
      title: 'Not Started'
    },
    {
      title: 'Reading'
    },
    {
      title: 'Completed'
    },
  ]
  status = [
    'Not Started', 'Reading', 'Completed'
  ]

  not_started = ['Get to work', 'Pick up groceries', 'Fall asleep'];

  reading = ['Get up', 'Take a shower', 'Check e-mail', 'Walk dog'];

  completed = ['Brush teeth', 'Go home', ]
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
