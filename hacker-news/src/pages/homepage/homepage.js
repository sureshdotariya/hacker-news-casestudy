import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  loadNews,
  upVote,
  downVote,
  updatePage,
} from '../../redux/news/news.action';
import NewsList from '../../components/news-list/news-list';
import './homepage.scss';
import PropTypes from 'prop-types';

const HomePage = ({
  newsList,
  pageno,
  recordDisplay,
  loadNews,
  upVote,
  downVote,
  updatePage,
}) => {
  console.log(newsList);

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className='homepage-container'>
      {newsList && (
        <NewsList
          news={newsList}
          upVote={upVote}
          downVote={downVote}
          updatePage={updatePage}
          pageno={pageno}
          recordDisplay={recordDisplay}
        ></NewsList>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsList: state.news.data ? state.news.data : [],
    pageno: state.news.pageno,
    recordDisplay: state.news.recordDisplay,
  };
};

const mapDispatchToProps = {
  loadNews,
  downVote,
  upVote,
  updatePage,
};

HomePage.propTypes = {
  newsList: PropTypes.array,
  pageno: PropTypes.number,
  recordDisplay: PropTypes.number,
  loadNews: PropTypes.func,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
