import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearch from './pages/BookSearch';
import Bookshelf from './pages/Bookshelf';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookSearch onAddToBookshelf={addToBookshelf} />} />
        <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} />} />
      </Routes>
    </Router>
  );
};

export default App;
