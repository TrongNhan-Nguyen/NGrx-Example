import { Post } from './../../Interfaces/Post';
import { Action } from '@ngrx/store';
export enum EPostAction {
  CREATE = '[POST] Create',
  UPDATE = '[POST] Update',
  DELETE = '[POST] Delete',
  GET_ALL = '[POST] Get all posts',
  GET_POST = '[POST] GET post',
  CHANGE_MSG = '[POST] Change msg',
}
export class Create implements Action {
  public readonly type = EPostAction.CREATE;
  constructor(public payload: Post) {}
}
export class Update implements Action {
  public readonly type = EPostAction.UPDATE;
  constructor(public payload?: any) {}
}
export class Delete implements Action {
  public readonly type = EPostAction.DELETE;
  constructor(public payload?: any) {}
}
export class GetAll implements Action {
  public readonly type = EPostAction.GET_ALL;
}
export class GetPost implements Action {
  public readonly type = EPostAction.GET_POST;
  constructor(public payload?: any) {}
}
export class ChangeMsg implements Action {
  public readonly type = EPostAction.CHANGE_MSG;
  constructor(public payload: string) {}
}

export type PostAction =
  | Create
  | Update
  | Delete
  | GetPost
  | GetAll
  | ChangeMsg;
