/* eslint-env browser */
import fetch from 'isomorphic-fetch';

export function get(url) {
  const request = new Request(url, {
    headers: new Headers({
      'Content-Type': 'text/plain',
    }),
  });

  return fetch(request).then((res) => {
    if (res.ok) {
      return res.json();
    }
    const error = {
      status: res.status,
      text: res.statusText,
    };
    throw error;
  });
}
