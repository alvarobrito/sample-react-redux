import { combineReducers } from 'redux';
import { SEARCH, FETCH_ATTEMPT, FETCH_SUCCESS, FETCH_FAIL } from './actions';

function isFetching(state = false, action) {
  switch (action.type) {
    case FETCH_ATTEMPT:
      return true;
    case FETCH_SUCCESS:
    case FETCH_FAIL:
      return false;
    default:
      return state;
  }
}

function payload(state = [], action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

function errors(state = {}, action) {
  switch (action.type) {
    case FETCH_FAIL:
      return action.errors;
    case FETCH_ATTEMPT:
    case FETCH_SUCCESS:
      return {};
    default:
      return state;
  }
}

function query(state = {}, action) {
  switch (action.type) {
    case SEARCH:
      return action.query;
    default:
      return state;
  }
}

export default combineReducers({
  isFetching,
  payload,
  errors,
  query,
});
