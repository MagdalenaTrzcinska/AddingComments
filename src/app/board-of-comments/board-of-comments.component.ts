import {Component, OnInit} from '@angular/core';
import {CommsService} from '../comms.service';
import {Comment} from '../comments';

@Component({
  selector: 'app-board-of-comments',
  templateUrl: './board-of-comments.component.html',
  styleUrls: ['./board-of-comments.component.scss'],
})

export class BoardOfCommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private service: CommsService) {
  }

  ngOnInit() {
    this.service.subject.subscribe(comms => {
      this.comments = comms;
    });
  }

  onRemove(comment: number) {
    this.service.remove(comment);
  }

  onEditOrDelete(comment: number) {
    this.comments[comment].isDisabledText = !this.comments[comment].isDisabledText;
    this.comments[comment].isHiddenRemoveOrEditBtn = !this.comments[comment].isHiddenRemoveOrEditBtn;
    this.comments[comment].isHiddenOKBtn = !this.comments[comment].isHiddenOKBtn;
  }
}
