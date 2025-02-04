import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksBoardDndComponent } from './books-board-dnd.component';

describe('BooksBoardDndComponent', () => {
  let component: BooksBoardDndComponent;
  let fixture: ComponentFixture<BooksBoardDndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksBoardDndComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksBoardDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
