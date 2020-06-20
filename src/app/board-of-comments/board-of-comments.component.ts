import {Component} from '@angular/core';
import {CommsService} from '../comms.service';
import {Comment} from '../comments';

@Component({
  selector: 'app-board-of-comments',
  templateUrl: './board-of-comments.component.html',
  styleUrls: ['./board-of-comments.component.scss'],
})

export class BoardOfCommentsComponent {
   comments: Comment[] = [];

  constructor(private service: CommsService) {
   service.subject.subscribe(comms => {
      this.comments = comms;
    });
  }

  onRemove(numberComment: number) {
    this.service.remove(numberComment);
  }

  onEditOrDelete(numberComment: number) {
    this.comments[numberComment].isDisabledText = !this.comments[numberComment].isDisabledText;
    this.comments[numberComment].isHiddenRemoveOrEditBtn = !this.comments[numberComment].isHiddenRemoveOrEditBtn;
    this.comments[numberComment].isHiddenOKBtn = !this.comments[numberComment].isHiddenOKBtn;
  }
}
