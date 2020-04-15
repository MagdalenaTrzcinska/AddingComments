import {Component} from '@angular/core';


import {CommsService} from '../comms.service';
import {Comment} from '../comments';
import {Subscription} from 'rxjs';
import {BehaviorSubject, Observable, Subject} from 'rxjs';


@Component({
  selector: 'app-board-of-comments',
  templateUrl: './board-of-comments.component.html',
  styleUrls: ['./board-of-comments.component.scss'],
})
export class BoardOfCommentsComponent {
   comments: Comment[] = [];


  constructor(private service: CommsService) {
   service.getComments().subscribe(comms => {
      this.comments = comms;
    });
  }

  remove(i) {
    this.service.remove(i);
  }

  edit(i) {
    this.comments[i].disabledText = !this.comments[i].disabledText;
    this.comments[i].hiddenDeleteorEditBtn = !this.comments[i].hiddenDeleteorEditBtn;
    this.comments[i].hiddenOKBtn = !this.comments[i].hiddenOKBtn;
  }
}
