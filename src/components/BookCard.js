import React from 'react';

const BookCard = ({ book, onAddToBookshelf }) => {
  const { title, author_name, first_publish_year } = book;

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>{author_name ? author_name.join(', ') : 'Unknown Author'}</p>
      <p>{first_publish_year}</p>
      <button onClick={() => onAddToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
