// import { useState } from "react";

// interface RatingProps {
//   value?: number;
//   readOnly?: boolean;
// }

// function Rating({ value = 3, readOnly = false }: RatingProps) {
//   const [rating, setRating] = useState(value);

//   const handleRatingChange = (newRating: number) => {
//     setRating(newRating);
//   };
import { Rating } from "flowbite-react";
function Rate({ value = 3 }) {
  return (
    <Rating>
      {[1, 2, 3, 4, 5].map((star) => (
        <Rating.Star key={star} filled={star < value} />
      ))}

      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <a
        href="#"
        className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
        73 reviews
      </a>
    </Rating>
  );
}

export default Rate;
