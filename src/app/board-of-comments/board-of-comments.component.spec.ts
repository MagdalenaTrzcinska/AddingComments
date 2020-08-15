import {async, TestBed} from '@angular/core/testing';
import {CommsService} from '../comms.service';
import {BoardOfCommentsComponent} from './board-of-comments.component';

describe('BoardOfCommentsComponent', () => {
  let service: CommsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardOfCommentsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BoardOfCommentsComponent);
    const newComments = fixture.componentInstance;
    expect(newComments).toBeTruthy();
  });

  it('#', () => {
    const fixture = TestBed.createComponent(BoardOfCommentsComponent);
    const newComments = fixture.componentInstance;
    newComments.ngOnInit();
    expect(newComments.comments).toBeDefined();
  });

  it('#s', () => {
    const fixture = TestBed.createComponent(BoardOfCommentsComponent);
    fixture.detectChanges();
    const newComments = fixture.debugElement.nativeElement;
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toBeDefined('EDIT');
    button.click();
    button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toBeDefined('OK');
  });
});
