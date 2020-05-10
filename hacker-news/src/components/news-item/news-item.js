import React from 'react';
import './news-item.scss';

const NewsItem = ({ record, upVote, downVote }) => {
  return (
    <tr className='news-item'>
      <td>{record.comments.length}</td>
      <td>{record.votes}</td>
      <td>
        <div>
          <a href='#' onClick={() => upVote(record.id)} className='anchor-link'>
            Up
          </a>
        </div>
        <div>
          <a
            href='#'
            onClick={() => downVote(record.id)}
            className='anchor-link'
          >
            Down
          </a>
        </div>
      </td>
      <td>
        {record.title}{' '}
        <span>
          ({record.site}) by {record.author}
        </span>
      </td>
    </tr>
  );
};

export default NewsItem;
