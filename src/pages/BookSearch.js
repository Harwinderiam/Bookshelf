import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const BookSearch = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setResults(response.data.docs);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="book-search">
      <h1>Book Search</h1>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="results">
        {results.map((book) => (
          <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} />
        ))}
      </div>
      <a href="/bookshelf">Go to My Bookshelf</a>
    </div>
  );
};

export default BookSearch;
