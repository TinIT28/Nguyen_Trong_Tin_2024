import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_ALL_POSTS_REQUEST,
  GET_POST_DETAILS_REQUEST,
} from "../../contants/postContants";
import {
  getAllPostsFail,
  getAllPostsSuccess,
  getPostDetailSuccess,
  getPostDetailFail,
} from "../actions/postActions";

// Get all post
function* getAllPosts() {
  try {
    const response = yield call(axios.get, "/posts");
    const postsData = response.data.posts;
    yield put(getAllPostsSuccess(postsData));
  } catch (error) {
    yield put(getAllPostsFail(error.message));
  }
}

export function* lookupGetAllPosts() {
  yield takeLatest(GET_ALL_POSTS_REQUEST, getAllPosts);
}

// Get post detail
function* getPostDetail(action) {
  try {
    const postId = action.payload; // Assuming the payload contains the ID of the post
    const response = yield call(axios.get, `/posts/${postId}`);
    const postData = response.data.post;
    yield put(getPostDetailSuccess(postData));
  } catch (error) {
    yield put(getPostDetailFail(error.message));
  }
}

export function* lookupGetPostDetail() {
  yield takeLatest(GET_POST_DETAILS_REQUEST, getPostDetail);
}
