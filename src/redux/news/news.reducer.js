import {
  NEWS_LIST_SUCCESS,
  NEWS_LIST_ERROR,
  NEWS_UP_VOTE,
  NEWS_DOWN_VOTE,
  NEWS_PAGE_NUM,
} from './news.action';

import { UpdateVote } from '../../utils/utils';

const InitialState = {
  data: [],
  error: '',
  pageno: 1,
  recordDisplay: 5,
};

const NewsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case NEWS_LIST_SUCCESS:
      return {
        ...state,
        data: [...action.news],
      };
    case NEWS_UP_VOTE:
      const news = UpdateVote(state.data, action.id, 'up');

      return {
        ...state,
        data: [...news],
      };
    case NEWS_DOWN_VOTE:
      const newsD = UpdateVote(state.data, action.id, 'down');
      return {
        ...state,
        data: [...newsD],
      };
    case NEWS_PAGE_NUM:
      return {
        ...state,
        pageno:
          action.accesstype === 'next' ? state.pageno + 1 : state.pageno - 1,
      };
    case NEWS_LIST_ERROR:
      return {
        ...state,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default NewsReducer;
