import React, { useState } from 'react';
import './style.css';

export const AddForm = ({ onAddNewBook }) => {
  const [book, setBook] = useState({
    isRead: false,
    title: '',
  });
  return (
    <form
      className='book-form'
      onSubmit={(e) => {
        e.preventDefault();
        if (book.title.length) {
          onAddNewBook(book);
          setBook({
            isRead: false,
            title: '',
          });
        }
      }}
    >
      <input
        type='text'
        className='book-input'
        placeholder='Title of the book'
        value={book.title}
        onChange={(e) => setBook((prev) => ({ ...prev, title: e.target.value }))}
      />
      <button className='book-button pointer' type='submit'>
        Add new book
      </button>
    </form>
  );
};
