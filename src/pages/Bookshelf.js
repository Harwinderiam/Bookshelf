import React from 'react';

const Bookshelf = ({ bookshelf }) => {
  return (
    <div className="bookshelf">
      <h1>My Bookshelf</h1>
      <div className="bookshelf-list">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            <p>{book.first_publish_year}</p>
          </div>
        ))}
      </div>
      <a href="/">Back to Search</a>
    </div>
  );
};

export default Bookshelf;
