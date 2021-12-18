import * as type from "../types";

const initialState = {
  users: [],
  selectedCandidate: [],
  rejectedCandidate: [],
  loading: false,
  error: null,
};
export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.SELECTED_CANDIDATE:
      const updatedUsers = state.users.filter(
        (profile) => profile.id !== action.payload.id
      );
      return {
        ...state,
        users: updatedUsers,
        selectedCandidate: [...state.selectedCandidate, action.payload],
      };
    case type.REJECTED_CANDIDATE:
      const newState = state.users.filter(
        (profile) => profile.id !== action.payload.id
      );
      return {
        ...state,
        users: newState,
        rejectedCandidate: [...state.rejectedCandidate, action.payload],
      };
    default:
      return state;
  }
}
