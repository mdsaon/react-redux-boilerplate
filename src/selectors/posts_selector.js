import { createSelector } from 'reselect';
import _ from 'lodash';
const postsSelector = state =>state.posts;
const selectedPostsSelector = state =>state.selectedPostsIds;

const getPosts = (posts,selectedPostsIds) => {
    const selectedPosts = _.filter(
        posts,
        post=>_.contains(selectedPosts,post.id)
    );
    return selectedPosts;
}
export default createSelector(
    postsSelector,
    selectedPostsSelector,
    getPosts,
)