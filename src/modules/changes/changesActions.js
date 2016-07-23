import 'whatwg-fetch';

export const GET_CHANGES = 'GET_CHANGES';
export const LIKE_CHANGE = 'LIKE_CHANGE';

const endpoint = 'http://localhost:9000';

export const getChanges = () => ({
  type: GET_CHANGES,
  payload: fetch(`${endpoint}/change`, {
    method: 'GET'
  }).then(response => response.json())
});

export const likeChange = (changeId) => ({
  type: LIKE_CHANGE,
  payload: fetch(`${endpoint}/change/${changeId}/like`, {
    method: 'POST'
  })
});
