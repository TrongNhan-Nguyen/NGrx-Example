import { postFeatureKey } from './post.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostState } from './post.state';

export const featurePost = createFeatureSelector<IPostState>(postFeatureKey);
export const msgPostSelector = createSelector(
  featurePost,
  (state: IPostState) => {
    return state.msg;
  }
);
