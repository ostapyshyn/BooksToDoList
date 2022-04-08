import React from 'react';
import './style.css';
import { BsTrash } from 'react-icons/bs';

export const Book = ({ count, item, onRemoveBook, onReadBook }) => {
  const titleStyle = `book-title ${item.isRead ? 'isRead' : ''}`;
  const bookField = `book-wrapper ${item.isRead ? 'complete' : ''}`;
  return (
    <li className={bookField}>
      <span className='book-count'>{count}</span>
      <div className='info-book'>
        <span className={titleStyle}>{item.title}</span>
        <p>{item.description}</p>
      </div>

      <span className='row'>
        <span className='pointer' onClick={() => onRemoveBook(item.id)}>
          <BsTrash className='icons' />
        </span>
        &nbsp;
        <input type='checkbox' className='pointer' checked={item.isRead} onChange={() => onReadBook(item.id)} />
      </span>
    </li>
  );
};
