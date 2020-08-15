import {async, TestBed} from '@angular/core/testing';
import {NewCommentsComponent} from './new-comments.component';
import {CommsService} from '../comms.service';

describe('NewCommentsComponent', () => {
  let service: CommsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewCommentsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NewCommentsComponent);
    const newComments = fixture.componentInstance;
    expect(newComments).toBeTruthy();
  });

  it('#photosToChoose should changes after functions', () => {
    const fixture = TestBed.createComponent(NewCommentsComponent);
    const newComments = fixture.componentInstance;
    newComments.basicDetails();
    expect(newComments.photosToChoose).toEqual(true);
    newComments.onChoosePhoto();
    expect(newComments.photosToChoose).toEqual(false);
  });

  it('#selectedPhoto should be defined', () => {
    const fixture = TestBed.createComponent(NewCommentsComponent);
    const newComments = fixture.componentInstance;
    newComments.onWhichPhotos(1);
    expect(newComments.selectedPhoto).toBeDefined();
  });

  it('#service.comments.lenght should be 4 after #addingComments', () => {
    const fixture = TestBed.createComponent(NewCommentsComponent);
    const newComments = fixture.componentInstance;
    service = TestBed.inject(CommsService);
    newComments.addingComments();
    expect(service.comments.length).toBe(4);
  });

});
