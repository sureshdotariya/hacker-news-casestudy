import React from 'react';
import { connect } from 'react-redux';
import './chartpage.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import PropTypes from 'prop-types';

const ChartPage = ({ newsList }) => {
  console.log(newsList);

  return (
    <div className='chartpage-container'>
      <LineChart
        width={700}
        height={600}
        data={newsList}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis
          dataKey='id'
          label={{ value: 'ID', position: 'insideBottomCenter', dy: 10 }}
        />
        <YAxis
          label={{
            value: 'Votes',
            position: 'insideLeft',
            angle: -90,
            dy: -10,
          }}
        />
        <Tooltip />
        <Line type='monotone' dataKey='votes' stroke='#82ca9d' />
      </LineChart>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsList: state.news.data ? state.news.data : [],
  };
};

const mapDispatchToProps = null;

ChartPage.propTypes = {
  newsList: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);
