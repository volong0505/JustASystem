import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksBoardDndListComponent } from './books-board-dnd-list.component';

describe('BooksBoardDndListComponent', () => {
  let component: BooksBoardDndListComponent;
  let fixture: ComponentFixture<BooksBoardDndListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksBoardDndListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksBoardDndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
