import React from 'react';
import Contact from './Contact';
import './pages.css';
import { BiLibrary } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import placeholderImage from '../images/book-cover-placeholder.png';

const Ebook = () => {
  // Data for the sections
  const trendingBooks = [
    { title: 'The Adventures of Placeholder', author: 'John Doe', cover: placeholderImage, summary: 'A thrilling journey through unknown lands, filled with adventure and mystery.' },
    { title: 'Mystery in the Shadows', author: 'Jane Smith', cover: placeholderImage, summary: 'A detective story where every clue leads to more questions than answers.' },
    { title: 'Journey to Nowhere', author: 'John Doe', cover: placeholderImage, summary: 'A tale of survival and self-discovery in a vast, unforgiving wilderness.' }
  ];

  const newReleases = [
    { title: 'Secrets of the Universe', author: 'Alice Johnson', cover: placeholderImage, summary: 'Unravel the deepest mysteries of the cosmos in this mind-expanding book.' },
    { title: 'The Time Machine', author: 'H.G. Wells', cover: placeholderImage, summary: 'A scientist travels through time, encountering a future civilization beyond imagination.' },
    { title: 'Parallel Lives', author: 'Julia Brown', cover: placeholderImage, summary: 'Explore alternate realities and the choices that define our existence.' }
  ];

  const genres = [
    'Action', 'Adventure', 'Biography', "Children\'s", 'Classics',
    'Comedy', 'Crime', 'Drama', 'Fantasy', 'Historical', 
    'Horror', 'Mystery'
  ];

  return (
    <div className="ebook">
      <div className="library-container">
        {/* Search Bar */}
        <div className="library-search-bar">
          <BiLibrary className="library-icon" />
          <input type="text" className="search-input" placeholder="Search the library..." />
          <button type="submit" className='search-button'><FaSearch /></button>
        </div>

        {/* Main Content Sections */}
        <div className="section-container">
          {/* Trending Books Section */}
          <div className="block1">
            <h3 className="block-title">Trending Books</h3>
            <div className="book-container">
              {trendingBooks.map((book, index) => (
                <div className="book-item" key={index}>
                  <img src={book.cover} alt={`${book.title} Cover`} />
                  <div className="book-info">
                    <p className="book-title">{book.title}</p>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-summary">{book.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Releases Section */}
          <div className="block2">
            <h3 className="block-title">New Releases</h3>
            <div className="book-container">
              {newReleases.map((book, index) => (
                <div className="book-item" key={index}>
                  <img src={book.cover} alt={`${book.title} Cover`} />
                  <div className="book-info">
                    <p className="book-title">{book.title}</p>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-summary">{book.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Genres Section */}
          <div className="block3">
            <h3 className="block-title">Genres</h3>
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Ebook;
