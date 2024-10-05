import React from 'react';
import Slider from 'react-slick';

const books = {
  popular: [
    { title: 'Adventures of Sherlock Holmes', cover: '/path/to/sherlock.jpg' },
    { title: 'The Color Purple', cover: '/path/to/color-purple.jpg' },
    // Add more books here
  ],
  fiction: [
    { title: 'The Handmaid\'s Tale', cover: '/path/to/handmaids-tale.jpg' },
    // Add more books
  ],
  'non-fiction': [
    { title: 'Dreams from My Father', cover: '/path/to/dreams-from-my-father.jpg' },
    // Add more books
  ],
};

interface BookCarouselProps {
  category: 'popular' | 'fiction' | 'non-fiction';
}

const BookCarousel: React.FC<BookCarouselProps> = ({ category }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {books[category].map((book, index) => (
        <div key={index} className="p-4">
          <img src={book.cover} alt={book.title} className="w-full h-64 object-cover rounded-md" />
          <h4 className="mt-2 text-center font-semibold">{book.title}</h4>
        </div>
      ))}
    </Slider>
  );
};

export default BookCarousel;
