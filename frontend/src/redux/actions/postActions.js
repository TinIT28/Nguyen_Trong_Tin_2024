import {
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  GET_POST_DETAILS_REQUEST,
  GET_POST_DETAILS_SUCCESS,
  GET_POST_DETAILS_FAIL,
} from "../../contants/postContants";

// Get all post
export const getAllPostsRequest = () => ({
  type: GET_ALL_POSTS_REQUEST,
});

export const getAllPostsSuccess = (postsData) => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload: postsData,
});

export const getAllPostsFail = (error) => ({
  type: GET_ALL_POSTS_FAIL,
  payload: error,
});

// Get post detail
export const getPostDetailRequest = () => ({
  type: GET_POST_DETAILS_REQUEST,
});

export const getPostDetailSuccess = (postData) => ({
  type: GET_POST_DETAILS_SUCCESS,
  payload: postData,
});

export const getPostDetailFail = (error) => ({
  type: GET_POST_DETAILS_FAIL,
  payload: error,
});
