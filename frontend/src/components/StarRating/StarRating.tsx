import{ useState } from 'react';
import './StarRating.css';

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (clickedRating: number) => {
    setRating(clickedRating);
  };
  // console.log(rating)

  return (
    <div>
      
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? 'filled' : ''}
            onClick={() => handleStarClick(star)}
          >
            ★
          </span>
       ))}
      </div>
    </div>
  );
};

export default StarRating;
