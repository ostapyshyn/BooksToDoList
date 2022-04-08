import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export const AddForm = ({ onAddNewBook }) => {
  const [book, setBook] = useState({
    isRead: false,
    description: '',
    title: '',
  });
  const inputRef = useRef(null);
  const isTextInput = book.title.length && book.description.length;
  useEffect(() => {
    inputRef.current.focus();
  }, []);
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
          ref={inputRef}
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
