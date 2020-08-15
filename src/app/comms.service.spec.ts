import {CommsService} from './comms.service';

describe('CommsService', () => {
  let service: CommsService;
  beforeEach(() => {
    service = new CommsService();
  });

  it('#service.comments.length should have "3" ' , () => {
    expect(service.comments.length).toBe(3);
  });

  it('after #service.remove() #service.comments.length should have "2" ' , () => {
    service.remove(1);
    expect(service.comments.length).toBe(2);
  });

  it('after #service.create() #service.comments.length should have "4" ' , () => {
    service.create(
      {id: 1,
        name: '123',
        dateAdded: '12.34',
        comment: '111',
        photo: '../assets/Rabarbar.jpg',
        isHiddenOKBtn: true,
        isDisabledText: false,
        isHiddenRemoveOrEditBtn: false});
    expect(service.comments.length).toBe(4);
  });
});
