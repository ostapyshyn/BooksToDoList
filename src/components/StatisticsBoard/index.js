import React from 'react';
import './style.css';

export const StatisticsBoard = ({ all, readBooks, notReadBooks, onRemoveAll }) => {
  return (
    <div className='statics-board'>
      <div className='statics-data'>
        <span className='all'>All: {all}</span>
        <span className='read'>Read: {readBooks}</span>
        <span className='not-read'>Not read: {notReadBooks}</span>
      </div>
      <button className='remove-button' onClick={onRemoveAll}>
        RemoveAll
      </button>
    </div>
  );
};
