import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

const apiUrl = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`;
function getApi() {
  return fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (e) {
    yield put({ type: "GET_USERS_FAILED", message: e.message });
  }
}

function* userSaga() {
  yield takeLatest("GET_USERS_REQUESTED", fetchUsers);
}
export default userSaga;
