import { handleResponse, handleError } from './apiUtils';
const baseUrl = '/stubs/news.json';

export function getNews() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
