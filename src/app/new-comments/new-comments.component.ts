import {Component} from '@angular/core';
import {CommsService} from '../comms.service';


@Component({
  selector: 'app-new-comments',
  templateUrl: './new-comments.component.html',
  styleUrls: ['./new-comments.component.scss'],
})
export class NewCommentsComponent {

  btn: boolean = false;
  selectedPhoto: string;
  username: string;
  com: string;
  todaysDate: number = Date.now();
  photosToChoose = true;

  constructor(private service: CommsService) {
  }

  onChoosePhoto() {
    this.photosToChoose = false;
    this.btn = true;
  }

  onPhotos(event) {
    this.photosToChoose = true;
    this.selectedPhoto = '../assets/choose' + event + '.jpeg';
  }

  onAddComment() {
    if (this.username === '' || this.com === '') {
      alert('Enter the name and/or comment');
    } else {
      if (this.photosToChoose === false || this.btn === false) {
        this.selectedPhoto = '../assets/Unknown.png';
      }

      this.service.create(
        {
          name: this.username,
          data: this.todaysDate,
          com: this.com,
          photo: this.selectedPhoto,
          disabledText: true,
          hiddenDeleteorEditBtn: false,
          hiddenOKBtn: true
        });


      this.username = '';
      this.com = '';
      this.selectedPhoto = '';
      this.btn = false;
      this.photosToChoose = true;
    }
  }


  pressEnter(event) {
    if (event.keyCode === 13) {
      this.onAddComment();
    }
  }

}
