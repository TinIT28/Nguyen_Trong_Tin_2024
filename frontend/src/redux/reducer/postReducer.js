import {
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
} from "../../contants/postContants";

export const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_REQUEST:
      return {
        loading: true,
        success: false,
        posts: [],
      };

    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        posts: action.payload,
        error: null,
      };

    case GET_ALL_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        posts: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
