import { all } from "redux-saga/effects";
import { lookupLoginUser, lookupLoadUser } from "./userSaga";
import { lookupGetAllPosts, lookupGetPostDetail } from "./postSaga";

export function* rootSaga() {
  yield all([
    lookupLoginUser(),
    lookupLoadUser(),
    lookupGetAllPosts(),
    lookupGetPostDetail(),
  ]);
}
