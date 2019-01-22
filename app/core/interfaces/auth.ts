export interface IObjectBase {
  id: string;
  title?: string;
  dateCreated: Date;
  dateModified: Date;
}

export enum genderEnum {
  Male = "Male",
  Female = "Female",
  Unspecified = "Unspecified"
}

export interface IUser extends IObjectBase {
    firstName: string;
    lastName: string;
    avatar: string;
    gender: genderEnum;
}

export interface IAuth {
  getCurrentUser(): IUser;
  getCurrentUserId(): string | undefined;
  isLoggedIn(): boolean;
  logout(): Promise<void>;
}
