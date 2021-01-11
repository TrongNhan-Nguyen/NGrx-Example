import { ActionReducerMap } from '@ngrx/store';
import * as postReducer from './post/post.reducer';
import * as postState from './post/post.state';
export interface IAppState {
  post: postState.IPostState;
}
export const appReducer: ActionReducerMap<IAppState,any> = {
  post: postReducer.postReducer,
};
