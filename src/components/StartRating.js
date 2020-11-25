import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../index.css';

const StartRating = ({ rating = 0, getRating }) => {
  // const [rating, setRating] = useState(initValue);

  const handleClick = (e) => {
    getRating(e.target.value);
  };

  return (
    <div className="flex justify-center">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input className="hidden" type="radio" name="rating" value={ratingValue} onClick={handleClick} />
            <FaStar className="star" color={ratingValue <= rating ? '#38B2AC' : '#D1D5DB'} size={45} />
          </label>
        );
      })}
    </div>
  );
};

export default StartRating;
