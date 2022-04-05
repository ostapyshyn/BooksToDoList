import BOOK_LIST from './store/books.json';
import { Book } from './components/Book';

function App() {
  return (
    <>
      {BOOK_LIST.map((book) => (
        <Book key={book.id} />
      ))}
    </>
  );
}

export default App;
