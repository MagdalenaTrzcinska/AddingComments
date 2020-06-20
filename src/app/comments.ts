export interface Comment {
  id?: number | null;
  name: string;
  dateAdded;
  photo: string;
  comment: string;
  isDisabledText: boolean;
  isHiddenRemoveOrEditBtn: boolean;
  isHiddenOKBtn: boolean;
}
