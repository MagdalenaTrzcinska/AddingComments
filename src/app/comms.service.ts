import {Injectable} from '@angular/core';
import {Comment} from './comments';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CommsService {

  dateOfComment = {
    first: Date.parse('Aug 9, 2019 21:30:30GMT'),
    second: Date.parse('Jan 30, 2020 9:12:30GMT'),
    third: Date.parse('Mar 15, 2020 11:32:30GMT')
  };

   subject: BehaviorSubject<Comment[]>;

   comments: Comment[] = [
    {
      id: 0,
      name: 'Max2321',
      dateAdded: this.dateOfComment.first,
      comment: 'I am delighted! Good luck :D',
      photo: '../assets/user1.jpeg',
      isDisabledText: true,
      isHiddenRemoveOrEditBtn: false,
      isHiddenOKBtn: true
    },
    {
      id: 1,
      name: 'Heeero',
      dateAdded: this.dateOfComment.second,
      comment: 'Greetings. This post is amazing.',
      photo: '../assets/prof.jpg',
      isDisabledText: true,
      isHiddenRemoveOrEditBtn: false,
      isHiddenOKBtn: true
    },
    {
      id: 2,
      name: 'rhubarb',
      dateAdded: this.dateOfComment.third,
      comment: 'Hahaha, it is wonderful. I am looking forward to the next post',
      photo: '../assets/Rabarbar.jpg',
      isDisabledText: true,
      isHiddenRemoveOrEditBtn: false,
      isHiddenOKBtn: true
    }
  ];

  constructor() {
    this.subject = new BehaviorSubject<Comment[]>(this.comments);
  }

  create(comment: Comment) {
    comment.id = this.comments.length;
    this.comments.push(comment);
    this.subject.next(this.comments);
  }

  remove(comment: number) {
    this.comments.splice(comment, 1);
    this.subject.next(this.comments);
  }
}
