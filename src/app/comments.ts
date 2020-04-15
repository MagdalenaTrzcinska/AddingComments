export interface Comment {
  id?: number|null;
  name: string;
  data;
  photo: string;
  com: string;
  disabledText: boolean;
  hiddenDeleteorEditBtn: boolean;
  hiddenOKBtn: boolean;
}
