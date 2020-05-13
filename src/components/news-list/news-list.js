import React from 'react';
import './news-list.scss';
import Table from 'react-bootstrap/Table';
import NewsItem from '../news-item/news-item';

const NewsList = ({ news, ...props }) => {
  const { pageno, recordDisplay, updatePage } = props;

  // below code is for pagination
  let slicedNews = news.slice(
    (pageno - 1) * recordDisplay,
    pageno * recordDisplay
  );

  return (
    <>
      <Table striped bordered hover responsive className='news-list'>
        <thead>
          <tr>
            <th>Comments</th>
            <th>Count</th>
            <th>Vote</th>
            <th>News Details</th>
          </tr>
        </thead>
        <tbody>
          {slicedNews &&
            slicedNews.map((record) => (
              <NewsItem key={record.id} record={record} {...props}></NewsItem>
            ))}
        </tbody>
      </Table>
      <div className='pagination-row'>
        {pageno !== 1 && (
          <a
            href='#'
            onClick={() => updatePage('prev')}
            className='anchor-link'
          >
            Prev
          </a>
        )}
        {pageno < news.length / recordDisplay && (
          <a
            href='#'
            onClick={() => updatePage('next')}
            className='anchor-link'
          >
            Next
          </a>
        )}
      </div>
    </>
  );
};

export default NewsList;
