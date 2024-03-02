// import { useState } from "react";
import { Rating } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface RatingProps {
  value?: number;
  product_id?: string;
  text?: number;
  readOnly?: boolean;
}

function Rate({ value = 3, text, product_id }: RatingProps) {
  const [rating, setRating] = useState(value);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <>
      <Rating>
        {[1, 2, 3, 4, 5].map((star) => (
          <Rating.Star key={star} filled={star < value} />
        ))}
      </Rating>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <Link
        to={`reviews/${product_id}`}
        className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
        {text} reviews
      </Link>
    </>
  );
}

export default Rate;
