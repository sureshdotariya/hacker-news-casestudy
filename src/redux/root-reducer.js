import { combineReducers } from 'redux';
import NewsReducer from './news/news.reducer';

const RootReducer = combineReducers({
  news: NewsReducer,
});

export default RootReducer;
