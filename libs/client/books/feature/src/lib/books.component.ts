import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksBoardDndComponent } from '@just-a-system/client-books-ui';

@Component({
  selector: 'client-books',
  imports: [
    CommonModule,
    BooksBoardDndComponent
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
}
