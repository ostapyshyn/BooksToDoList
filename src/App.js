import React, { useState } from 'react';

import './style.css';
import BOOK_LIST from './store/books.json';
import { Books } from './components/Books';
import { AddForm } from './components/AddForm';
import { StatisticsBoard } from './components/StatisticsBoard';

function App() {
  const [bookList, setBookList] = useState(BOOK_LIST);

  const removeBook = (id) => {
    setBookList((prevState) => prevState.filter((book) => book.id !== id));
  };

  const onReadBook = (id) => {
    setBookList((prevState) => prevState.map((book) => (book.id === id ? { ...book, isRead: !book.isRead } : book)));
  };

  const onAddNewBook = (book) => {
    setBookList((prevState) => [...prevState, { ...book, id: bookList.length + 1 }]);
  };

  const statisticsData = {
    all: bookList.length,
    readBooks: bookList.filter((book) => book.isRead).length,
    notReadBooks: bookList.filter((book) => !book.isRead).length,
  };

  const removeAll = () => {
    setBookList([]);
  };

  return (
    <div className='container'>
      <AddForm onAddNewBook={onAddNewBook} />
      <StatisticsBoard {...statisticsData} onRemoveAll={removeAll} />
      <Books data={bookList} onRemoveBook={removeBook} onReadBook={onReadBook} />
    </div>
  );
}

export default App;
