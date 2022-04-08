import React, { useState } from 'react';
import './style.css';

export const AddForm = ({ onAddNewBook }) => {
  const [book, setBook] = useState({
    isRead: false,
    description: '',
    title: '',
  });

  const isTextInput = book.title.length && book.description.length;

  return (
    <form
      className='book-form'
      onSubmit={(e) => {
        e.preventDefault();
        if (isTextInput) {
          onAddNewBook(book);
          setBook({
            isRead: false,
            title: '',
            description: '',
          });
        }
      }}
    >
      <div className='inputs'>
        <input
          type='text'
          className='book-input'
          placeholder='Title of the book'
          value={book.title}
          onChange={(e) => setBook((prev) => ({ ...prev, title: e.target.value }))}
        />

        <input
          type='text'
          className='book-input'
          placeholder='Description of the book'
          value={book.description}
          onChange={(e) => setBook((prev) => ({ ...prev, description: e.target.value }))}
        />
      </div>

      <button className='book-button pointer' type='submit' disabled={!isTextInput}>
        Add new book
      </button>
    </form>
  );
};
