

import React from 'react';
import BookCarousel from '../../components/BookCarousel';

const Home: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold">Hello, Yuvraj</h2>
          <h4 className="text-xl">Which book do you want to read today?</h4>
        </div>
        <img src="/path/to/avatar.png" alt="User Avatar" className="w-12 h-12 rounded-full" />
      </div>

      {/* Search Bar */}
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="Search for books..."
          className="w-full px-4 py-3 rounded-full border border-gray-300 shadow-sm"
        />
        <button className="absolute right-3 top-3">
          <i className="fa fa-search"></i>
        </button>
      </div>

      {/* Book Categories */}
      <div className="mb-6">
        <ul className="flex space-x-6 text-lg font-semibold">
          <li className="border-b-2 border-black">All</li>
          <li>eBooks</li>
          <li>Bestsellers</li>
          <li>New</li>
          <li>Textbooks</li>
        </ul>
      </div>

      {/* Popular Books Carousel */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Popular</h3>
        <BookCarousel category="popular" />
      </div>

      {/* Fiction and Non-Fiction Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Fiction</h3>
        <BookCarousel category="fiction" />
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Non Fiction</h3>
        <BookCarousel category="non-fiction" />
      </div>

      {/* Essential Reading List */}
      <div className="bg-gray-100 p-6 mt-10">
        <h3 className="text-xl font-bold">More essential reading lists</h3>
        {/* Additional reading list grid here */}
      </div>
    </div>
  );
};

export default Home;