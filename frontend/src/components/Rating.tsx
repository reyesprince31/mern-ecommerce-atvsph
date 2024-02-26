import { useState } from "react";

interface RatingProps {
  value?: number;
  readOnly?: boolean;
}

function Rating({ value = 3, readOnly = false }: RatingProps) {
  const [rating, setRating] = useState(value);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <input
            key={star}
            type="radio"
            checked={star === rating}
            onChange={() => handleRatingChange(star)}
            className="mask mask-star"
            disabled={readOnly}
          />
        );
      })}
    </div>
  );
}

export default Rating;
