import React from 'react';
import './style.css';

export const Book = ({ count, item, onRemoveBook, onReadBook }) => {
  const titleStyle = `book-title ${item.isRead ? 'isRead' : ''}`;
  return (
    <li className='book-wrapper'>
      <span className='book-count'>{count}</span>
      <div className='info-book'>
        <span className={titleStyle}>{item.title}</span>
        <p>{item.description}</p>
      </div>

      <span className='row'>
        <span className='pointer' onClick={() => onRemoveBook(item.id)}>
          🗑️
        </span>
        <input type='checkbox' className='pointer' checked={item.isRead} onChange={() => onReadBook(item.id)} />
      </span>
    </li>
  );
};
