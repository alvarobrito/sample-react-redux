import { get } from '../../services/api';

// Action types
export const FETCH_ATTEMPT = 'transfers/FETCH_ATTEMPT';
export const FETCH_SUCCESS = 'transfers/FETCH_SUCCESS';
export const FETCH_FAIL = 'transfers/FETCH_FAIL';

// Curry filter
function filter(query) {
  const regexp = new RegExp(query.description, 'i');
  return items => items.filter(item => regexp.test(item.description));
}

// Actions creators
export const fetch = query => (dispatch) => {
  dispatch({
    type: FETCH_ATTEMPT,
  });
  get('/api/transfers.json')
  .then((response) => {
    const data = query ? filter(query)(response.elements) : response.elements;
    dispatch({
      type: FETCH_SUCCESS,
      payload: data,
    });
  })
  .catch((err) => {
    dispatch({
      type: FETCH_FAIL,
      errors: err,
    });
  });
};
