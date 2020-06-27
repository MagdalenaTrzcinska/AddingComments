import {Component} from '@angular/core';
import {CommsService} from '../comms.service';


@Component({
  selector: 'app-new-comments',
  templateUrl: './new-comments.component.html',
  styleUrls: ['./new-comments.component.scss'],
})
export class NewCommentsComponent {

  btnSelectPhoto: boolean;
  selectedPhoto: string;
  username: string;
  comm: string;
  photosToChoose: boolean;
  todaysDate: number = Date.now();

  basicDetails() {
    this.photosToChoose = true;
    this.btnSelectPhoto = false;
    this.selectedPhoto = '';
    this.username = '';
    this.comm = '';
  }

  constructor(private service: CommsService) {
  }

  onChoosePhoto() {
    this.photosToChoose = false;
    this.btnSelectPhoto = true;
  }

  onPhotos(numberPhoto: number) {
    this.photosToChoose = true;
    this.selectedPhoto = '../assets/choose' + numberPhoto + '.jpeg';
  }

  onAddComment() {
    if (this.username === '' || this.comm === '') {
      alert('Enter the name and/or comment');
    } else {
      if (this.photosToChoose === false || this.btnSelectPhoto === false) {
        this.selectedPhoto = '../assets/Unknown.png';
      }

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

      this.basicDetails();
      this.photosToChoose = true;
      this.btnSelectPhoto = false;
    }
  }
}
