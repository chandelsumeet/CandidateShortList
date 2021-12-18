import * as type from "../types";

export function getUsers(users) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: users,
  };
}

export function selectedCandidate(candidate) {
  return {
    type: type.SELECTED_CANDIDATE,
    payload: candidate,
  };
}

export function rejectedCandidate(candidate) {
  return {
    type: type.REJECTED_CANDIDATE,
    payload: candidate,
  };
}
