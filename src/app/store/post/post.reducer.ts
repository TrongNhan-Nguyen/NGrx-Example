import { IPostState } from './post.state';
import { EPostAction, PostAction, ChangeMsg } from './post.action';
const initPostState: IPostState = {
  postList: [],
  filterList: [],
  msg: 'Default Msg',
  filter: '',
  activeId: '',
};

export function postReducer(
  state = initPostState,
  action: PostAction
): IPostState {
  switch (action.type) {
    case EPostAction.CREATE:
      const newPost = action.payload;
      const newList = { ...state.postList };
      newList.push(newPost);
      return {
        ...state,
        postList: newList,
      };
    case EPostAction.DELETE: {
      return { ...state };
    }
    case EPostAction.UPDATE: {
      return { ...state };
    }
    case EPostAction.GET_POST: {
      return { ...state };
    }
    case EPostAction.GET_ALL: {
      return { ...state };
    }
    case EPostAction.CHANGE_MSG: {
      return { ...state, msg: action.payload };
    }

    default:
      return { ...state };
  }
}
