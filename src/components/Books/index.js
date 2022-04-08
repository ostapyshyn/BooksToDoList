import React from 'react';
import './style.css';
import { Book } from '../Book';

export const Books = ({ data, onRemoveBook, onReadBook }) => {
  return (
    <ul className='books-list'>
      {data.length === 0 && <h1 className='center'>There is no data</h1>}
      {data.map((book, index) => {
        return <Book key={book.id} item={book} count={index + 1} onRemoveBook={onRemoveBook} onReadBook={onReadBook} />;
      })}
    </ul>
  );
};
