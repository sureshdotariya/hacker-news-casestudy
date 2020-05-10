import * as newsApi from '../../api/newsApi';

export const NEWS_LIST_SUCCESS = 'NEWS_LIST_SUCCESS';
export const NEWS_LIST_ERROR = 'NEWS_LIST_ERROR';
export const NEWS_UP_VOTE = 'NEWS_UP_VOTE';
export const NEWS_DOWN_VOTE = 'NEWS_DOWN_VOTE';
export const NEWS_PAGE_NUM = 'NEWS_PAGE_NUM';

export const loadNewsSuccess = (news) => {
  return { type: NEWS_LIST_SUCCESS, news };
};

export const loadNewsError = (err) => {
  return { type: NEWS_LIST_ERROR, err };
};

export const upVote = (id) => {
  return { type: NEWS_UP_VOTE, id };
};

export const downVote = (id) => {
  return { type: NEWS_DOWN_VOTE, id };
};

export const updatePage = (accesstype) => {
  return { type: NEWS_PAGE_NUM, accesstype };
};

export function loadNews() {
  return function (dispatch) {
    return newsApi
      .getNews()
      .then((news) => {
        dispatch(loadNewsSuccess(news.data));
      })
      .catch((error) => {
        dispatch(loadNewsError(error));
      });
  };
}
