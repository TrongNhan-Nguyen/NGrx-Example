import { Post } from './../../Interfaces/Post';
export interface IPostState {
  postList: Post[];
  filterList: Post[];
  msg: string;
  filter: string;
  activeId: string;
}
