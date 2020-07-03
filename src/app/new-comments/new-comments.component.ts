import {Component} from '@angular/core';
import {CommsService} from '../comms.service';


@Component({
  selector: 'app-new-comments',
  templateUrl: './new-comments.component.html',
  styleUrls: ['./new-comments.component.scss'],
})
export class NewCommentsComponent {

  isBtnSelectPhoto: boolean;
  selectedPhoto: string;
  username: string;
  comm: string;
  photosToChoose: boolean;
  todaysDate = Date.now();

  basicDetails() {
    this.photosToChoose = true;
    this.isBtnSelectPhoto = false;
    this.selectedPhoto = '';
    this.username = '';
    this.comm = '';
  }

  constructor(private service: CommsService) {
    this.basicDetails();
  }

  onChoosePhoto() {
    this.photosToChoose = false;
    this.isBtnSelectPhoto = true;
  }

  onWhichPhotos(photo: number) {
    this.photosToChoose = true;
    this.selectedPhoto = '../assets/choose' + photo + '.jpeg';
  }

  onValidationOfComment() {
    if (this.username === '' || this.comm === '') {
      alert('Enter the name and/or comment');
    } else {
      this.correctComment();

      this.basicDetails();
      this.photosToChoose = true;
      this.isBtnSelectPhoto = false;
    }
  }

  correctComment(){
    if (this.photosToChoose === false || this.isBtnSelectPhoto === false) {
      this.selectedPhoto = '../assets/Unknown.png';
    }
    this.addingToComments();
  }

  addingToComments() {
    this.service.create(
      {
        name: this.username,
        dateAdded: this.todaysDate,
        comment: this.comm,
        photo: this.selectedPhoto,
        isDisabledText: true,
        isHiddenRemoveOrEditBtn: false,
        isHiddenOKBtn: true
      });
  }
}
