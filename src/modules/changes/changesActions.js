import 'whatwg-fetch';
import { changesSchema } from './changesSchema';

export const GET_CHANGES = 'GET_CHANGES';
export const LIKE_CHANGE = 'LIKE_CHANGE';

const endpoint = 'http://localhost:9000';

export const getChanges = () => ({
  type: GET_CHANGES,
  payload: fetch(`${endpoint}/change`, {
    method: 'GET'
  }).then(response => response.json()),
  meta: {
    schema: { changes: changesSchema }
  }
});

export const likeChange = (changeId) => ({
  type: LIKE_CHANGE,
  payload: fetch(`${endpoint}/change/${changeId}/like`, {
    method: 'POST'
  }).then(response => response.json()),
  meta: {
    changeId
  }
});
