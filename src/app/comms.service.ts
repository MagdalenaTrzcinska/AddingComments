import {Injectable} from '@angular/core';
import {Comment} from './comments';
import {BehaviorSubject, Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CommsService {
  private dateOfFirstComment: number = Date.parse('Aug 9, 2019 21:30:30GMT');
  private dateOfSecondComment: number = Date.parse('Jan 30, 2020 9:12:30GMT');
  private dateOfTheThirdComment: number = Date.parse('Mar 15, 2020 11:32:30GMT');

  private subject: BehaviorSubject<Comment[]>;

  private comments: Comment[] = [
    {
      id: 0,
      name: 'Max2321',
      data: this.dateOfFirstComment,
      com: 'I am delighted! Good luck :D',
      photo: '../assets/user1.jpeg',
      disabledText: true,
      hiddenDeleteorEditBtn: false,
      hiddenOKBtn: true
    },
    {
      id: 1,
      name: 'Heeero',
      data: this.dateOfSecondComment,
      com: 'Greetings. This post is amazing.',
      photo: '../assets/prof.jpg',
      disabledText: true,
      hiddenDeleteorEditBtn: false,
      hiddenOKBtn: true
    },
    {
      id: 2,
      name: 'rhubarb',
      data: this.dateOfTheThirdComment,
      com: 'Hahaha, it is wonderful. I am looking forward to the next post',
      photo: '../assets/Rabarbar.jpg',
      disabledText: true,
      hiddenDeleteorEditBtn: false,
      hiddenOKBtn: true
    }
  ];

  constructor() {
    this.subject = new BehaviorSubject<Comment[]>(this.comments);
  }

  getComments(): Observable<Comment[]> {
    return this.subject;
  }

  create(comment: Comment) {
    comment.id = this.comments.length;
    this.comments.push(comment);
    this.subject.next(this.comments);
  }


  remove(i: number) {
    this.comments.splice(i, 1);
    this.subject.next(this.comments);
  }
}
